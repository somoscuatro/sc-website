<?php
/**
 * FAQs Post functionality.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme\Cpt;

use Somoscuatro\Theme\Cpt\Custom_Post;
use Somoscuatro\Theme\Cpt\Custom_Taxonomy;

/**
 * FAQs Post functionality.
 */
class FAQs {

	/**
	 * Initializes FAQs CPT functionality.
	 */
	public static function init(): void {
		self::register_cpt();
		self::register_taxonomy();
	}

	/**
	 * Registers FAQs CPT.
	 */
	private static function register_cpt(): void {
		Custom_Post::register(
			'FAQ',
			'FAQs',
			array(
				'rewrite'      => array( 'slug' => 'faqs' ),
				// phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
				'menu_icon'    => 'data:image/svg+xml;base64,' . base64_encode(
					'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /> </svg>'
				),
				'has_archive'  => false,
				'supports'     => array( 'title', 'editor', 'revisions' ),
				'show_in_rest' => true,
			)
		);
	}

	/**
	 * Registers FAQs Category.
	 */
	private static function register_taxonomy(): void {
		Custom_Taxonomy::register(
			'FAQ Category',
			'FAQs Categories',
			array( 'faqs' )
		);
	}
}