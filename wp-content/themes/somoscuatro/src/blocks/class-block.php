<?php
/**
 * Contains Somoscuatro\Theme\Blocks\Block Class.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme\Blocks;

use Somoscuatro\Theme\Timber;

use DI\Container;

/**
 * Class for ACF Gutenberg Blocks.
 */
class Block implements Block_Interface {

	/**
	 * The PHP DI Container.
	 *
	 * @var Container
	 */
	protected static $container;

	/**
	 * The Timber Class.
	 *
	 * @var Timber
	 */
	protected static $timber;

	/**
	 * The Timber Context.
	 *
	 * @var array
	 */
	protected $context = array();

	/**
	 * The Prefix Used for ACF Blocks.
	 *
	 * @var string
	 */
	public static $acf_block_prefix = '';

	/**
	 * Class Constructor.
	 *
	 * @param Container $container The PHP DI Container.
	 */
	public function __construct( Container $container ) {
		static::$container = $container;
		static::$timber    = $container->get( 'Somoscuatro\Theme\Timber' );
	}

	/**
	 * Registers Activation Hook Callback.
	 *
	 * The Timber context is not yet fully ready when the class is instantiated
	 * via the hooks loader with PHP Attributes.
	 *
	 * The hooks loader instantiates each class having hooks when looking for PHP
	 * Action and Filter Attributes. This happens very early in the WordPress
	 * loading process, before the Timber context is fully initialized.
	 *
	 * By the time the constructor is called, the Timber context is not yet fully
	 * ready, so we CANNOT set the Timber context in the constructor.
	 *
	 * @see Somoscuatro\Theme\Attributes\Hook::register_hooks()
	 */
	public function init() {
		$this->context = static::$timber->context();
		$this->register_acf_block();
		$this->register_assets();
	}

	/**
	 * Dummy Method to Get ACF Block Fields.
	 *
	 * This method needs to be overridden by each Gutenberg block class.
	 */
	public function get_acf_fields(): array {
		return array();
	}

	/**
	 * Registers the ACF Block.
	 */
	public function register_acf_block(): void {
		register_block_type( __DIR__ . '/' . str_replace( '_', '-', str_replace( 'block_', '', static::$acf_block_prefix ) ) );

		if ( function_exists( 'acf_add_local_field_group' ) ) {
			acf_add_local_field_group( $this->get_acf_fields() );
		}
	}

	/**
	 * Registers Block Assets.
	 */
	public function register_assets(): void {}

	/**
	 * Block Render Callback Proxy.
	 *
	 * In the block.json file for ACF, the renderCallback parameter has to be a
	 * string that points to a callback. So, we need a static proxy method to take
	 * care of block rendering. To get the right block name when we're rendering,
	 * we've got to create the block class using new static(). new self() won't do
	 * the trick because the block name we get won't come from the blocks
	 * extending this class.
	 *
	 * @param array   $block The Gutenberg Block.
	 * @param string  $content The Content of the Block.
	 * @param boolean $is_preview True If in Preview Mode.
	 */
	public static function render_callback( array $block, string $content = '', $is_preview = false ) {
		( new static( static::$container ) )->render( $block, $content, $is_preview );
	}

	/**
	 * Renders Block Twig Template.
	 *
	 * @param array   $block The Gutenberg Block.
	 * @param string  $content The Content of the Block.
	 * @param boolean $is_preview True If in Preview Mode.
	 */
	public function render( array $block, string $content = '', $is_preview = false ) {
		$this->context = $this->set_context( $this->context, $block, $is_preview );

		$block_dirname       = strtolower( explode( '\\', $block['render_callback'] )[3] );
		$block_template_path = __DIR__ . '/' . str_replace( '_', '-', $block_dirname ) . '/template.twig';

		static::$timber->render( $block_template_path, $this->context );
	}

	/**
	 * Sets Block Context.
	 *
	 * @param array   $context The Timber Context.
	 * @param array   $block The Gutenberg Block.
	 * @param boolean $is_preview True If in Preview Mode.
	 *
	 * @return array The Modified Timber Context.
	 */
	public function set_context( array $context, array $block, bool $is_preview ): array {
		unset( $block['data'] );
		$context['block'] = $block;

		$fields = get_fields();
		if ( $fields ) {
			$context = $this->add_acf_fields_to_context( static::$acf_block_prefix, $context, $fields );
		}

		$context['is_preview'] = $is_preview;

		return $this->set_custom_context( $context );
	}

	/**
	 * Sets the Custom Context for the Block.
	 *
	 * This method can be overridden in a particular block to modify the default
	 * Timber context.
	 *
	 * @param array $context The Timber Context.
	 *
	 * @return array The Modified Timber Context.
	 */
	public function set_custom_context( array $context ): array {
		return $context;
	}

	/**
	 * Adds ACF Fields to Timber Context.
	 *
	 * @param string $block_prefix The ACF Block Prefix.
	 * @param array  $context The Timber Context.
	 * @param array  $fields The ACF Fields.
	 *
	 * @return array The Timber Context with ACF Fields.
	 */
	public function add_acf_fields_to_context( string $block_prefix, array $context, array $fields ): array {
		$unprefixed_acf_fields = json_decode( str_replace( $block_prefix . '_', '', wp_json_encode( $fields ) ), true );

		return array_merge( $context, $unprefixed_acf_fields );
	}
}
