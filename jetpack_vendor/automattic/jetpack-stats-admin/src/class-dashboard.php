<?php
/**
 * A class that adds a stats dashboard to wp-admin.
 *
 * @package automattic/jetpack-stats-admin
 */

namespace Automattic\Jetpack\Stats_Admin;

use Automattic\Jetpack\Admin_UI\Admin_Menu;
use Automattic\Jetpack\Assets;
use Automattic\Jetpack\Stats\Options as Stats_Options;

/**
 * Responsible for adding a stats dashboard to wp-admin.
 *
 * @package jetpack-stats-admin
 */
class Dashboard {
	// This is a fixed list @see https://github.com/Automattic/wp-calypso/pull/71442/
	const JS_DEPENDENCIES                 = array( 'lodash', 'react', 'react-dom', 'wp-api-fetch', 'wp-components', 'wp-compose', 'wp-element', 'wp-html-entities', 'wp-i18n', 'wp-is-shallow-equal', 'wp-polyfill', 'wp-primitives', 'wp-url', 'wp-warning', 'moment' );
	const ODYSSEY_CDN_URL                 = 'https://widgets.wp.com/odyssey-stats/%s/%s';
	const OPT_OUT_NEW_STATS_FEATURE_CLASS = 'opt-out-new-stats';
	/**
	 * We bump the asset version when the Jetpack back end is not compatible anymore.
	 */
	const ODYSSEY_STATS_VERSION                = 'v1';
	const ODYSSEY_STATS_CACHE_BUSTER_CACHE_KEY = 'odyssey_stats_admin_asset_cache_buster';

	/**
	 * Whether the class has been initialized
	 *
	 * @var boolean
	 */
	private static $initialized = false;

	/**
	 * Priority for the dashboard menu
	 * For Jetpack sites: Jetpack uses 998 and 'Admin_Menu' uses 1000, so we need to use 999.
	 * For simple site: the value is overriden in a child class with value 100000 to wait for all menus to be registered.
	 *
	 * @var int
	 */
	protected $menu_priority = 999;

	/**
	 * Init Stats dashboard.
	 */
	public static function init() {
		if ( ! self::$initialized ) {
			self::$initialized = true;
			( new self() )->init_hooks();
		}
	}

	/**
	 * Initialize the hooks.
	 */
	public function init_hooks() {
		self::$initialized = true;
		// Jetpack uses 998 and 'Admin_Menu' uses 1000.
		add_action( 'admin_menu', array( $this, 'add_wp_admin_submenu' ), $this->menu_priority );
	}

	/**
	 * The page to be added to submenu
	 */
	public function add_wp_admin_submenu() {
		$page_suffix = Admin_Menu::add_menu(
			__( 'Stats App', 'jetpack-stats-admin' ),
			_x( 'Stats App', 'product name shown in menu', 'jetpack-stats-admin' ),
			'manage_options',
			'jetpack-stats-app',
			array( $this, 'render' ),
			100
		);

		if ( $page_suffix ) {
			add_action( 'load-' . $page_suffix, array( $this, 'admin_init' ) );
		}
	}

	/**
	 * Override render funtion
	 */
	public function render() {
		// Record the number of views of the stats dashboard on the initial several loads for the purpose of showing feedback notice.
		$views = intval( Stats_Options::get_option( 'views' ) ) + 1;
		if ( $views <= Notices::VIEWS_TO_SHOW_FEEDBACK ) {
			Stats_Options::set_option( 'views', $views );
		}

		?>
		<div id="wpcom" class="jp-stats-dashboard" style="min-height: calc(100vh - 100px);">
			<div class="hide-if-js"><?php esc_html_e( 'Your Jetpack Stats dashboard requires JavaScript to function properly.', 'jetpack-stats-admin' ); ?></div>
			<div class="hide-if-no-js" style="height: 100%">
				<img
					class="jp-stats-dashboard-loading-spinner"
					width="32"
					height="32"
					style="position: absolute; left: 50%; top: 50%;"
					alt=<?php echo esc_attr( __( 'Loading', 'jetpack-stats-admin' ) ); ?>
					src="//en.wordpress.com/i/loading/loading-64.gif"
				/>
			</div>
		</div>
		<script>
			jQuery(document).ready(function($) {
				// Load SVG sprite.
				$.get("https://widgets.wp.com/odyssey-stats/common/gridicons-506499ddac13811fee8e.svg", function(data) {
					var div = document.createElement("div");
					div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
					div.style = 'display: none';
					document.body.insertBefore(div, document.body.childNodes[0]);
				});
				// we intercept on all anchor tags and change it to hashbang style.
				$("#wpcom").on('click', 'a', function (e) {
					const link = e && e.currentTarget && e.currentTarget.attributes && e.currentTarget.attributes.href && e.currentTarget.attributes.href.value;
					if( link && link.startsWith( '/stats' ) ) {
						location.hash = `#!${link}`;
						return false;
					}
				});
			});
		</script>
		<?php
	}

	/**
	 * Initialize the admin resources.
	 */
	public function admin_init() {
		add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_scripts' ) );
	}

	/**
	 * Enqueue admin scripts.
	 */
	public function load_admin_scripts() {
		if ( file_exists( __DIR__ . '/../dist/build.min.js' ) ) {
			// Load local assets for the convinience of development.
			Assets::register_script(
				'jp-stats-dashboard',
				'../dist/build.min.js',
				__FILE__,
				array(
					'in_footer'  => true,
					'textdomain' => 'jetpack-stats-admin',
				)
			);
			Assets::enqueue_script( 'jp-stats-dashboard' );
		} else {
			// In production, we load the assets from our CDN.
			$css_url = 'build.min' . ( is_rtl() ? '.rtl' : '' ) . '.css';
			wp_register_script( 'jp-stats-dashboard', sprintf( self::ODYSSEY_CDN_URL, self::ODYSSEY_STATS_VERSION, 'build.min.js' ), self::JS_DEPENDENCIES, $this->get_cdn_asset_cache_buster(), true );
			wp_register_style( 'jp-stats-dashboard-style', sprintf( self::ODYSSEY_CDN_URL, self::ODYSSEY_STATS_VERSION, $css_url ), array(), $this->get_cdn_asset_cache_buster() );
			wp_enqueue_script( 'jp-stats-dashboard' );
			wp_enqueue_style( 'jp-stats-dashboard-style' );
		}

		wp_add_inline_script(
			'jp-stats-dashboard',
			( new Odyssey_Config_Data() )->get_js_config_data(),
			'before'
		);
	}

	/**
	 * Returns cache buster string for assets.
	 * Development mode doesn't need this, as it's handled by `Assets` class.
	 */
	protected function get_cdn_asset_cache_buster() {
		// Use cached cache buster in production.
		$remote_asset_version = get_transient( self::ODYSSEY_STATS_CACHE_BUSTER_CACHE_KEY );
		if ( ! empty( $remote_asset_version ) ) {
			return $remote_asset_version;
		}

		// If no cached cache buster, we fetch it from CDN and set to transient.
		$response = wp_remote_get( sprintf( self::ODYSSEY_CDN_URL, self::ODYSSEY_STATS_VERSION, 'build_meta.json' ), array( 'timeout' => 5 ) );

		if ( is_wp_error( $response ) ) {
			// fallback to the package version.
			return Main::VERSION;
		}

		$build_meta = json_decode( wp_remote_retrieve_body( $response ), true );
		if ( ! empty( $build_meta['cache_buster'] ) ) {
			// Cache the cache buster for a day.
			set_transient( self::ODYSSEY_STATS_CACHE_BUSTER_CACHE_KEY, $build_meta['cache_buster'], 15 * MINUTE_IN_SECONDS );
			return $build_meta['cache_buster'];
		}

		// fallback to the package version.
		return Main::VERSION;
	}
}
