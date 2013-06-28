<?php

class Map {

  /* */
  protected $id;

  /* */
  protected $rendered = FALSE;

  /* Default map settings. */
  protected $defaults = array();

  /* Collection of plugins registered with the map. */
  protected $plugins = array();

  /**
   *
   */
  public function __construct($defaults = array()) {
    $this->defaults = $defaults;
  }

  /**
   *
   */
  public function extend($plugin_name, $settings) {
    // if ($this->rendered) {
    //   throw new Exception("Cannot extend a rendered map.");
    // }
    if (!isset($this->plugins[$plugin_name])) {
      throw new Exception("Unknown plugin: $plugin_name");
    }
    $this->plugins[$plugin_name]->extend($settings);
    return $this;
  }

  /**
   *
   */
  public function addPlugin($name, Plugin $plugin) {
    $this->plugins[$name] = $plugin;
    return $this;
  }

  /**
   *
   */
  public function render() {
    $this->rendered = TRUE;
    $definition = array();
    foreach ($this->plugins as $name => $plugin) {
      $settings = $plugin->execute($this);
      if (!empty($settings)) {
        $definition[$name] = $settings;
      }
    }
    return $definition;
  }

  /**
   *
   */
  public function plugins() {
    return $this->plugins;
  }

  /**
   *
   */
  public function defaults() {
    return $this->defaults;
  }

  /**
   *
   */
  public function isRendered() {
    return $this->rendered;
  }
}
