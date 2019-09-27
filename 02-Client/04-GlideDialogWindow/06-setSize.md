##### 9/27/2019
# `setSize(width, height)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| width | `number` | The width of the dialog window. |
| height | `number` | The height of the dialog window. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the size of the dialog window.

  > If you do not pass `width` and `height` parameters, a default size is used.

---

```js
var gdw = new GlideDialogWindow('show_list');

gdw.setSize(750, 300);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GDW-setSize_N_N)