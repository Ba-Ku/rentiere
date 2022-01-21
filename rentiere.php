<?php
/*
Plugin Name: Rentiere
Version: 0.1
 */

function register_rentier()
{
    register_post_type(
        'rentier',
        [
            'label' => 'Rentier',
            'public' => true,
            'supports' => ['title', 'editor'],
            'show_in_rest' => true,
        ]);
}

add_action('init', 'register_rentier');


function register_nasenfarbe()
{
    register_taxonomy(
        'nasenfarbe',
        'rentier',
        [
            'label' => 'Nasenfarbe',
            'public' => true,
            'show_in_rest' => true,
        ]);
}

add_action('init', 'register_nasenfarbe');


