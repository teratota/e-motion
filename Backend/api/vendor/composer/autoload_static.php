<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbc37c02aae76c487194ccd4c40e564cb
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbc37c02aae76c487194ccd4c40e564cb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbc37c02aae76c487194ccd4c40e564cb::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
