<?php
/**
 * Contains Somoscuatro\Theme\Attributes\Action Class.
 *
 * @package somoscuatro-theme
 */

namespace Somoscuatro\Theme\Attributes;

use Attribute;

/**
 * WordPress Actions Management Class.
 */
#[Attribute( Attribute::TARGET_METHOD | Attribute::IS_REPEATABLE )]
class Action extends Filter {

	/**
	 * Register the Action Handler.
	 *
	 * @param callable|array $method The Action Handler.
	 */
	public function register( callable|array $method ): void {
		add_action(
			$this->hook_name,
			$method,
			$this->priority,
			$this->accepted_args
		);
	}
}
