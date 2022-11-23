<?php
/**
 * Plugin's main Loader.
 *
 * @package starter-liquid-totalizer
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'SLT_Loader' ) ) {
	/**
	 * Class SLT_Loader.
	 */
	class SLT_Loader {


		/**
		 *  Constructor.
		 */
		public function __construct() {
			 $this->includes();
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripting_files' ) );
		}

		/**
		 * Includes files depend on platform
		 */
		public function includes() {
			include 'class-slt-shortcode.php';
		}

		/**
		 *
		 */
		public function enqueue_scripting_files() {
			 // Enqueuing Starter Liquid Totalizer's Stylesheet.
			wp_enqueue_style( 'slt-stylesheet', plugin_dir_url( __DIR__ ) . 'assets/css/slt-stylesheet.css' );

			// Enqueuing Starter Liquid Totalizer's jQuery.
			wp_enqueue_script( 'slt-script', plugin_dir_url( __DIR__ ) . 'assets/js/slt-script.js', array( 'jquery' ), wp_rand() );

			// Enqueuing Math.js libraray to solve matrix problems.
			wp_enqueue_script( 'math', 'https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.3.2/math.js' );
		}
	}

	new SLT_Loader();
}
