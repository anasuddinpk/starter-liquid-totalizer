<?php
/**
 * Creating Calculator's shortcodes.
 *
 * @package starter-liquid-totalizer
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'SLT_Shortcode' ) ) {

	/**
	 * Class SLT_Shortcode.
	 */
	class SLT_Shortcode {

		/**
		 *  Constructor.
		 */
		public function __construct() {
			 add_shortcode( 'starter-liquid-totalizer', array( $this, 'returns_calculator_template' ) );
		}

		/**
		 * Returns Starter Liquid Totalizer template to Shortcode.
		 *
		 * @return String $slt_template Calculator's HTML.
		 */
		public function returns_calculator_template() {
			 $path = plugin_dir_path( __DIR__ ) . 'templates/starter-liquid-totalizer.php';
			ob_start();
			include $path;
			$slt_template = ob_get_clean();

			return $slt_template;
		}
	}

	new SLT_Shortcode();
}
