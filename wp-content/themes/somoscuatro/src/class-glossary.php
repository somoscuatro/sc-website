<?php
/**
 * Glossary related functionality.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme;

/**
 * Glossary related functionality.
 */
class Glossary {

	/**
	 * Gets all glossary terms.
	 */
	public static function get_terms(): array {
		return array_map(
			fn( $term ) => (object) array(
				'ID'         => $term->ID,
				'post_title' => $term->post_title,
				'permalink'  => get_permalink( $term->ID ),
			),
			get_posts(
				array(
					'post_type' => 'glossary-term',
					'showposts' => -1,
					'orderby'   => 'title',
					'order'     => 'ASC',
				)
			),
		);
	}

	/**
	 * Gets glossary letters.
	 */
	public static function get_letters( $glossary_terms ): array {
		$letters = array();

		foreach ( $glossary_terms as $glossary_term ) {
			$first_letter = $glossary_term->post_title[0];
			if ( ! in_array( $first_letter, $letters, true ) ) {
				$letters[] = strtolower( $first_letter );
			}
		}

		return $letters;
	}
}