<?php

/**
 * Singleton Trait
 * @author Yarin Ayash
 */

namespace VueWooCart;

/**
 * Trait Singleton
 *
 * @package VueWooCart
 * @author Yarin Ayash
 */
trait Singleton
{

    /**
     * Class will be initialized into this variable
     *
     * @var null|Object - Class instance
     */
    private static $instance = null;

    /**
     * Creates new instance class if not exists
     *
     * @param mixed ...$params - Optional. variables that will passed into class construct
     *
     * @return Object - Instance of the class that is using this Trait.
     */
    public static function get_instance(...$params)
    {
        if (!self::$instance)
            self::$instance = new static(...$params);

        return self::$instance;
    }
}
