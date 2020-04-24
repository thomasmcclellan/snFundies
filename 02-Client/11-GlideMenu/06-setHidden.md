##### 4/03/2020
# `setHidden(item)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| item | `GlideMenuItem` | The item to be hidden. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Hides the specified menu item.

When hiding menu items , the separator bars are not adjusted, so it is possible to end up with the menu showing two separators in a row.

---

```js
g_menu.setHidden(g_item);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideMenuAPI#r_GM-setHidden_GMI)