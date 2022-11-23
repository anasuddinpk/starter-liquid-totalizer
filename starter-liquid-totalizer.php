<?php

/**
 * Plugin Name: Starter Liquid Totalizer
 * Plugin URI: https://github.com/anasuddinpk/starter-liquid-totalizer
 * Description: Made for displaying specialized calculator on WordPress templates that will determine the quantity of <code>Starter Liquid</code> to make Kombucha.
 * Version: 1.1.1.1
 * Author: Anas Uddin
 * Author URI: https://www.linkedin.com/in/anasuddinpk/
 * Text Domain: starter-liquid-totalizer
 *
 * @package starter-liquid-totalizer
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'SLT_PLUGIN_DIR' ) ) {
	define( 'SLT_PLUGIN_DIR', __DIR__ );
}

if ( ! defined( 'SLT_PLUGIN_DIR_URL' ) ) {
	define( 'SLT_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'SLT_ABSPATH' ) ) {
	define( 'SLT_ABSPATH', dirname( __FILE__ ) );
}

require_once SLT_ABSPATH . '/includes/class-slt-loader.php';
