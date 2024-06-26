<?php
/**
 * Contains Somoscuatro\Theme\Custom_Post_Types\Post_Types\Testimonials Class.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme\Custom_Post_Types\Post_Types;

use Somoscuatro\Theme\Custom_Post_Types\Custom_Post_Type;

/**
 * Testimonials Custom Post Type Functionality.
 */
class Testimonials extends Custom_Post_Type {

	/**
	 * Custom Post Type Singular Name.
	 *
	 * @var string
	 */
	protected string $singular_name = 'Testimonial';

	/**
	 * Custom Post Type Plural Name.
	 *
	 * @var string
	 */
	protected string $plural_name = 'Testimonials';

	/**
	 * Class Constructor.
	 */
	public function __construct() {
		parent::__construct();

		$args = array(
			'rewrite'      => array( 'slug' => 'testimonials' ),
				// phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
			'menu_icon'    => 'data:image/svg+xml;base64,' . base64_encode(
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd" /> </svg> '
			),
			'supports'     => array( 'title', 'editor', 'thumbnail', 'revisions' ),
			'show_in_rest' => true,
		);

		$this->args = wp_parse_args( $args, $this->args );
		$this->register_acf_custom_fields();
	}

	/**
	 * Register Testimonials ACF Custom Fields.
	 */
	public function register_acf_custom_fields(): void {
		if ( function_exists( 'acf_add_local_field_group' ) ) {
			acf_add_local_field_group(
				array(
					'key'      => 'group_cpt_testimonials',
					'title'    => __( 'CPT: Testimonials', 'somoscuatro-theme' ),
					'fields'   => array(
						array(
							'key'      => 'field_cpt_testimonials_company_logo',
							'label'    => __( 'Company Logo', 'somoscuatro-theme' ),
							'name'     => 'cpt_testimonials_company_logo',
							'type'     => 'image',
							'required' => true,
						),
						array(
							'key'      => 'field_cpt_testimonials_image',
							'label'    => __( 'Image', 'somoscuatro-theme' ),
							'name'     => 'cpt_testimonials_image',
							'type'     => 'image',
							'required' => true,
						),
						array(
							'key'      => 'field_cpt_testimonials_role_company',
							'label'    => __( 'Role & Company', 'somoscuatro-theme' ),
							'name'     => 'cpt_testimonials_role_company',
							'type'     => 'text',
							'required' => true,
						),
					),
					'location' => array(
						array(
							array(
								'param'    => 'post_type',
								'operator' => '==',
								'value'    => 'testimonial',
							),
						),
					),
				)
			);
		}
	}
}
