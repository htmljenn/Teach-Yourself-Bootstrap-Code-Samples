<?php 

function bootstrap_jquery_scripts() {
	// Register the script
	wp_register_script( 'my-script', get_template_directory_uri() .
    '/bootstrap/js/bootstrap.js', array( 'jquery' ) );
	// Enqueue the script:
	wp_enqueue_script( 'my-script' );
}
add_action( 'wp_enqueue_scripts', 'bootstrap_jquery_scripts' );

?>