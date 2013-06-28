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
      'layers' => array(
        'switcher' => array('position' => 'bottomleft'),
        'layers' => array(
          array(
            'title' => 'Terrain',
            'type' => 'base',
            'url' => 'http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
            'disabled' => TRUE,
          ),
          array(
            'title' => 'Watercolor',
            'type' => 'base',
            'url' => 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
            'disabled' => TRUE,
          ),
          array(
            'title' => 'Toner',
            'type' => 'base',
            'url' => 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg',
            'disabled' => TRUE,
          ),
        ),
      ),
      'view' => array(
        'center' => array(
          'lat' => 45.274,
          'lon' => -121.832
        ),
        'zoom' => 8,
      ),
    )),
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
  // Create a map and add some plugins.
  $map = new Map();
  $map->addPlugin('view', leaflet_framework_plugin('lf_view'))
      ->addPlugin('layers', leaflet_framework_plugin('lf_layers', array(
        'switcher' => array('position' => 'bottomleft'),
      )));

  // Register the map.
  MapManager::register('custom_extended', $map);

  // Extend map anywhere by referring to it by the name you registered.
  leaflet_framework_extend_map('layers', 'custom_extended', array(
    'layers' => array(
      array(
        'title' => 'Toner',
        'type' => 'base',
        'url' => 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg',
      ),
    ),
  ));

  // Extend map again.
  leaflet_framework_extend_map('layers', 'custom_extended', array(
    'layers' => array(
      array(
        'title' => 'Watercolor',
        'type' => 'base',
        'url' => 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
        'disabled' => TRUE,
      ),
    ),
  ));

  // Queue map for rendering.
  return leaflet_framework_map('custom_extended');
}

/**
 * Page callback for 'External plugin' exmaple.
 *
 * The leaflet_framework_examples module defines a plugin for including the
 * third-party Leaflet-hash Leaflet plugin. 
 */
function leaflet_framework_examples_external_plugin() {
  $map = new Map();
  $map->addPlugin('hash', leaflet_framework_plugin('hash'))
      ->addPlugin('layers', leaflet_framework_plugin('lf_layers'));

  MapManager::register('external_plugin', $map);

  return leaflet_framework_map('external_plugin');
}
