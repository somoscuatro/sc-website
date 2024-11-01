<?php
/**
 * List of Classes to Be Hooked.
 *
 * @package somoscuatro-theme
 */

use Somoscuatro\Theme\ACF;
use Somoscuatro\Theme\Asset;
use Somoscuatro\Theme\Customizer;
use Somoscuatro\Theme\GTM;
use Somoscuatro\Theme\Gutenberg;
use Somoscuatro\Theme\Media;
use Somoscuatro\Theme\Navigation;
use Somoscuatro\Theme\Performance;
use Somoscuatro\Theme\Security;
use Somoscuatro\Theme\SEO;
use Somoscuatro\Theme\Theme;
use Somoscuatro\Theme\Timber;
use Somoscuatro\Theme\Translation;

/**
 * List of Classes with Hooks
 */
return array(
	Theme::class,

	ACF::class,
	Asset::class,
	Customizer::class,
	GTM::class,
	Gutenberg::class,
	Media::class,
	Navigation::class,
	Performance::class,
	Security::class,
	SEO::class,
	Timber::class,
	Translation::class,
);
