<?php

class MapManager {

  protected static $maps = array();

  public static function register($id, $map) {
    if (isset($maps[$id])) {
      throw new Exception("Map: '$id' already exists.");
    }
    static::$maps[$id] = $map;
  }

  public static function get($id) {
    if (!isset(static::$maps[$id])) return NULL;
    return static::$maps[$id];
  }
}
