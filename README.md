# Leaflet Framework
[Drupal] module, provides a framework for building complex map-powered
functionality using [Leaflet].

## API:

```
hook_leafet_framework_maps() -> array()
    Implementing modules return array of map definitions (the plugins and config used to create the map).
    Map definitions:
        - detail the plugins used to build the map
        - provide map-specific plugin configuration overrides

hook_leaflet_framework_plugins() -> array()
    Implementing modules return array of plugin declarations.
    Plugin declarations:
        - reference a javascript library defined in hook_library().
        - provide a 'logical' name for the referenced plugin's entry point.
          - the entry point is a globally visible function
          - the 'logical' name is the function's absolute namespace as a string.
        - provide default configuration values.

leaflet_framework_map($map_id, $plugins => NULL, $defaults = array()) -> renderable array()

leaflet_framework_extend_map($plugin, $map_id, $options = array()) -> null
```

[Drupal]: http://drupal.org
[Leaflet]: http://leafletjs.com
