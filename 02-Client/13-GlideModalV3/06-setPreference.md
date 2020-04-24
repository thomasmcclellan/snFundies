##### 4/24/2020
# `setPreference(name, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The property name. |
| value | `string` | The property value. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Set a property that is read by the loaded UI page.

---

```js
var gm = new GlideModal('UI_dialog_name');
// sets the dialog title
gm.setTitle('Show Title');
gm.setPreference('table', 'task');
gm.setPreference('name', 'value');
// Opens the dialog
gm.render();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideModalClientSideV3API#r_GMODV3-setPreference_S_S)