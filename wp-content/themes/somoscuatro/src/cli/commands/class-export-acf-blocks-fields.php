<?php
/**
 * Contains Somoscuatro\Theme\CLI\Commands\Export_ACF_Blocks_Fields Class.
 *
 * @package somoscuatro-theme
 */

namespace Somoscuatro\Theme\CLI\Commands;

use Somoscuatro\Theme\CLI\CLI_Command;

use DI\Container;

/**
 * WP CLI Command to Export ACF Fields Blocks to JSON File.
 */
class Export_ACF_Blocks_Fields extends CLI_Command {

	/**
	 * The PHP DI Container.
	 *
	 * @var Container
	 */
	private $container;

	/**
	 * Class Constructor.
	 *
	 * @param Container $container The PHP DI Container.
	 */
	public function __construct( Container $container ) {
		$this->container = $container;
	}

	/**
	 * Exports ACF Fields for Gutenberg Blocks.
	 *
	 * ## OPTIONS:
	 *
	 * [<blocks-name-list>]
	 * : Exports the ACF Fields for the Gutenberg Blocks, given their names as a comma separated list.
	 *
	 * [--all]
	 * : Exports ACF Fields for all existing Gutenberg Blocks.
	 * ---
	 * default: ''
	 * ---
	 *
	 * ## EXAMPLES
	 *
	 *     wp export-acf-blocks-fields hero,cta
	 *     wp export-acf-blocks-fields --all
	 *
	 * @param array $args The CLI Command Arguments.
	 * @param array $options The CLI Command Options.
	 */
	public function __invoke( array $args, array $options ): void {
		$this->blocks_base_path = $this->get_base_path() . '/src/blocks/';

		$options = wp_parse_args( $options, array( 'all' => '' ) );
		if ( $options['all'] ) {
			$blocks_dirs = glob( $this->blocks_base_path . '*', GLOB_ONLYDIR );
			foreach ( $blocks_dirs as $block_dir ) {
				$this->export_acf_fields( basename( $block_dir ) );
			}
		} elseif ( isset( $args[0] ) ) {
			$blocks = explode( ',', trim( $args[0], ',' ) );

			foreach ( $blocks as $block ) {
				$this->export_acf_fields( $block );
			}
		}
	}

	/**
	 * Exports the ACF Fields for the Specified Gutenberg Block to JSON Format.
	 *
	 * @param string $block The Gutenberg Block Name.
	 */
	public function export_acf_fields( string $block ): void {
		$block_class            = str_replace( '-', '_', ucfirst( $block ) );
		$namespaced_block_class = $this->get_base_namespace() . '\\Blocks\\' . $block_class . '\\' . $block_class;

		if ( ! class_exists( $namespaced_block_class, false ) || ! method_exists( $namespaced_block_class, 'get_acf_fields' ) ) {
			return;
		}

		$json = '';
		if ( method_exists( $namespaced_block_class, 'get_acf_fields' ) ) {
			$json = wp_json_encode( ( new $namespaced_block_class( $this->container ) )->get_acf_fields() );
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_file_put_contents,WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
		file_put_contents( $this->blocks_base_path . $block . '/fields.json', $json );
	}
}
