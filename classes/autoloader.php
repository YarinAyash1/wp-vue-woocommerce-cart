<?php

/**
 * Disable direct access into this file
 */
if (!defined("ABSPATH")) {
    http_response_code(403);
    die;
}

/**
 * Setup autoloader
 */
spl_autoload_register(function ($class) {
    $separator = "\\";
    $namespace_start = "VueWooCart";

    // make sure namespace starts as it should
    if (strpos($class, $namespace_start . $separator) === 0) {

        // remove prefix
        $dir = str_replace(
            $namespace_start . $separator,
            'classes' . DIRECTORY_SEPARATOR,
            $class
        );

        // replace dashes
        $dir = str_replace("_", "-", $dir);

        // set directory separators
        $dir = str_replace($separator, DIRECTORY_SEPARATOR, $dir);

        // add .php
        $dir .= ".php";

        // call the file
        require_once dirname(__DIR__) . DIRECTORY_SEPARATOR . $dir;
    }
});
