<?php
/*
Plugin Name: Notice Ninja
Plugin URI:
Description:
Version: 1.0
Author: Arif Islam
Author URI: arifislam.techviewing.com
License: GPLv2 or later
Text Domain: noticeninja
Domain Path: /languages/
*/


function noticeninja_admin_notice() {
	if ( ! ( isset( $_COOKIE['nn-close'] ) ) ) {
		?>
        <div id="noticeninja" class="notice notice-success is-dismissible">
            <p>hay, This is a admin notice</p>
        </div>
		<?php
	}
}

add_action( 'admin_notices', 'noticeninja_admin_notice' );

add_action( 'admin_enqueue_scripts', function () {
	wp_enqueue_script( 'noticeninja-js', plugin_dir_url( __FILE__ ) . '/assets/js/main.js', array( 'jquery' ), time(), true );
} );