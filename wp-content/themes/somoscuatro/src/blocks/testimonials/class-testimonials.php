<?php
/**
 * Block's main functionality methods.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme\Blocks\Testimonials;

use Somoscuatro\Theme\Blocks\Block;

/**
 * Block main functionality.
 */
class Testimonials extends Block {

	/**
	 * The prefix used for ACF blocks.
	 *
	 * @var string
	 */
	protected static $acf_block_prefix = 'block_testimonials';

	/**
	 * Gets the ACF Block fields.
	 *
	 * @return array The ACF Block fields.
	 */
	public static function get_acf_fields(): array {
		return array(
			'key'      => 'group_' . self::$acf_block_prefix,
			'title'    => __( 'Block: Services', 'somoscuatro-theme' ),
			'fields'   => array(
				array(
					'key'           => 'field_' . self::$acf_block_prefix . '_bg_color',
					'label'         => __( 'Background Color', 'somoscuatro-theme' ),
					'name'          => self::$acf_block_prefix . '_bg_color',
					'type'          => 'color_picker',
					'required'      => 1,
					'return_format' => 'string',
				),
				array(
					'key'      => 'field_' . self::$acf_block_prefix . '_title',
					'label'    => __( 'Title', 'somoscuatro-theme' ),
					'name'     => self::$acf_block_prefix . '_title',
					'type'     => 'text',
					'required' => true,
				),
				array(
					'key'         => 'field_' . self::$acf_block_prefix . '_testimonials',
					'label'       => __( 'Testimonials', 'somoscuatro-theme' ),
					'name'        => self::$acf_block_prefix . '_testimonials',
					'type'        => 'relationship',
					'required'    => true,
					'post_type'   => array(
						0 => 'testimonial',
					),
					'post_status' => array(
						0 => 'publish',
					),
					'taxonomy'    => '',
					'filters'     => array(
						0 => 'search',
					),

				),
			),
			'location' => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/testimonials',
					),
				),
			),
		);
	}
}