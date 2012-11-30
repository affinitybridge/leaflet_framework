<?php

/**
 * Page callback for 'Default map' example.
 *
 * Leaflet Framework defines some default plugins and configuration. If no
 * plugins are provided, it will create a simple map with these defaults.
 */
function leaflet_framework_examples_default() {
  return array(
    'map' => leaflet_framework_map('example_map_default'),
  );
}

/**
 * Page callback for 'Extended custom map' example.
 *
 * The second parameter to leaflet_framework_map() is an array of plugin
 * configurations, keyed by plugin name. This tells the map builder what plugins
 * to attach and how they should be configured.
 */
function leaflet_framework_examples_custom() {
  return array(
    'map' => leaflet_framework_map('example_map_custom', array(
      'lf_layers' => array(
        'switcher' => array('position' => 'bottomleft'),
        'layers' => array(
          array(
            'title' => 'Bing - Hybrid',
            'type' => 'base',
            'url' => 'http://tiles.local/bing--hybrid/{z}/{x}/{y}.png',
          ),
          array(
            'title' => 'Color 1',
            'type' => 'base',
            'url' => 'http://tiles.local/colors-1/{z}/{x}/{y}.png',
            'disabled' => TRUE,
          ),
          array(
            'title' => 'Color 2',
            'type' => 'base',
            'url' => 'http://tiles.local/colors-2/{z}/{x}/{y}.png',
            'disabled' => TRUE,
          ),
          array(
            'title' => 'BCOGC Roads - Jan, 2011',
            'type' => 'overlay',
            'url' => 'http://tiles.local/bcogc-roads-2011-1/{z}/{x}/{y}.png',
          ),
        ),
      ),
      'lf_view' => array(
        'center' => array(59.274, -121.832),
        'zoom' => 8,
      ),
    )),
  );
}

/**
 * Page callback for 'Empty map' example.
 *
 * An empty map can be created without any defaults by passing an empty array
 * to the plugins parameter.
 */
function leaflet_framework_examples_empty() {
  return array(
    'map' => leaflet_framework_map('example_map_empty', array()),
  );
}

/**
 * Page callback for 'Extended custom map' example.
 *
 * The leaflet_framework_extend_map() function can be used to add new plugins
 * to an existing map or extend an existing plugin's configuration.
 *
 * In this example we add the 'lf_view' and 'lf_layers' plugins to an empty map
 * and then turn off the layer switcher and add another layer by extending the
 * 'lf_layers' plugin's configuration.
 */
function leaflet_framework_examples_custom_extended() {
  // Add the 'lf_view' and 'lf_layers' plugins to the 'custom_extended' map.
  leaflet_framework_extend_map('lf_view', 'custom_extended');
  leaflet_framework_extend_map('lf_layers', 'custom_extended', array(
    'layers' => array(
      array(
        'title' => 'Bing - Hybrid',
        'type' => 'base',
        'url' => 'http://tiles.local/bing--hybrid/{z}/{x}/{y}.png',
      ),
    ),
  ));

  // Extend the 'lf_layers' plugin configuration by disabling the layer
  // switcher and adding a new layer.
  leaflet_framework_extend_map('lf_layers', 'custom_extended', array(
    'switcher' => FALSE,
    'layers' => array(
      array(
        'title' => 'BCOGC Roads - Jan, 2011',
        'type' => 'overlay',
        'url' => 'http://tiles.local/bcogc-roads-2011-1/{z}/{x}/{y}.png',
      ),
    ),
  ));

  // Create the 'custom_extended' map as an empty map.
  return leaflet_framework_map('custom_extended', array());
}

/**
 * Page callback for 'External plugin' exmaple.
 *
 * The leaflet_framework_examples module defines a plugin for including the
 * third-party Leaflet-hash Leaflet plugin. 
 */
function leaflet_framework_examples_external_plugin() {
  leaflet_framework_extend_map('hash', 'external_plugin');
  leaflet_framework_extend_map('lf_layers', 'external_plugin');
  return leaflet_framework_map('external_plugin', array());
}
