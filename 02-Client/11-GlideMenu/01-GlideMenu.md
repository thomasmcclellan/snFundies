##### 3/27/2020
# `GlideMenu(g_menu and g_item)`
## Overview:
`GlideMenu` method are used in _UI Context Menus_, in the `onShow` scripts to customize UI Context Menu items.  There is no constructor for the `GlideMenu` class.  Access `GlideMenu` methods using the `g_menu` global `object`.
  * `g_menu` is the UI Context Menu that is about to be shown.  The `onShow` script can make changes to the appearance of the menu before it is displayed using these methods.
  * `g_item` is the current UI Context Menu item that is about to be shown.  It is used in several of the `g_menu` methods to specify an item.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideMenuAPI)