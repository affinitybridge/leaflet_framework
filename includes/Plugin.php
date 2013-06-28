<?php

abstract class Plugin {

  protected $settings = array();

  protected $extensions = array();

  public function extend($settings) {
    $this->extensions[] = $settings;
  }

  public function execute(Map $map) {
    $settings = $this->settings;
    foreach ($this->extensions as $ext) {
      $settings = drupal_array_merge_deep($settings, is_callable($ext) ? $ext() : $ext);
    }
    $this->extensions = array();
    return $settings;
  }

  abstract public function library();

}

/**
 *
 */
class GenericPlugin extends Plugin {

  protected $library;

  protected $logical;

  public function __construct($settings) {
    if (!isset($settings['library'])) {
      throw new Exception('No library specified.');
    }
    $this->library = $settings['library'];
    unset($settings['library']);

    if (isset($settings['logical'])) {
      $this->logical = $settings['logical'];
      unset($settings['logical']);
    }

    $this->settings = $settings;
  }

  public function library() {
    $library = $this->library;
    if ($this->logical) $library[] = $this->logical;
    return $library;
  }
}
