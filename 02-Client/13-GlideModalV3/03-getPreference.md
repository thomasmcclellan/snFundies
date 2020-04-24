##### 4/21/2020
# `getPreference(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The property name. |

## Return value:
| Type | Description |
|---|---|
| `string` | The specific property's value. |

---

## Description:
Returns the value of the specified property.

---

```js
var gm = new GlideModal('UI_dialog_name'),
    title;
// Sets the dialog title
gm.setTitle('Show Title');
// Returns the value of the title
title = gm.getPreference('title');
gm.setWidth(550);
// Opens the dialog
gm.render();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideModalClientSideV3API#r_GMODV3-getPreference_S)