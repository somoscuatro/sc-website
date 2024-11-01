<?php
/**
 * Contains Somoscuatro\Theme\Blocks\Related_Content\Related_Content Class.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme\Blocks\Related_Content;

use Somoscuatro\Theme\Blocks\Block;
use Somoscuatro\Theme\Theme;

/**
 * Block Main Functionality.
 */
class Related_Content extends Block {

	/**
	 * The Prefix Used for ACF Blocks.
	 *
	 * @var string
	 */
	public static $acf_block_prefix = 'block_related_content';

	/**
	 * Gets the ACF Block Fields.
	 *
	 * @return array The ACF Block Fields.
	 */
	public function get_acf_fields(): array {
		return array(
			'key'      => 'group_' . self::$acf_block_prefix,
			'title'    => __( 'Block: Related Content', 'somoscuatro-theme' ),
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
					'key'         => 'field_' . self::$acf_block_prefix . '_related_content',
					'label'       => __( 'Related Content', 'somoscuatro-theme' ),
					'name'        => self::$acf_block_prefix . '_related_content',
					'type'        => 'relationship',
					'required'    => true,
					'post_type'   => array(
						0 => 'service',
						1 => 'case-study',
						2 => 'glossary-term',
					),
					'post_status' => array(
						0 => 'publish',
					),
					'taxonomy'    => '',
					'filters'     => array(
						0 => 'search',
						1 => 'post_type',
					),
				),
			),
			'location' => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/related-content',
					),
				),
			),
		);
	}
}
