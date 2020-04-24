##### 3/31/2020
# `getItem(itemID)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| itemID | `string` | Specifies the item to be returned. |

## Return value:
| Type | Description |
|---|---|
| `GlideMenuItem` | The menu item. |

---

## Description:
Returns a menu item by item ID.

It can be necessary to find an item in a menu so that it can be changed before being displayed.  Each menu item may be assigned a unique ID when the menu item is created (either from a UI Context Menu entry or from the `addAction()` method in the Dynamic Script Action).

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/r_GM-getItem_S)