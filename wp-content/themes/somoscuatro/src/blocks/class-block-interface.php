<?php
/**
 * Contains Somoscuatro\Theme\Blocks\Block_Interface Interface.
 *
 * @package somoscuatro-theme
 */

declare(strict_types=1);

namespace Somoscuatro\Theme\Blocks;

use DI\Container;

/**
 * Interface for ACF Gutenberg Blocks.
 *
 * We need this interface to prevent child classes to override the constructor
 * with wrong parameters. This is necessary to ensure safe usage of new static()
 * in Block::render_callback().
 *
 * @see https://phpstan.org/blog/solving-phpstan-error-unsafe-usage-of-new-static
 */
interface Block_Interface {

	/**
	 * Class Constructor.
	 *
	 * @param Container $container The PHP DI Container.
	 */
	public function __construct( Container $container );
}
