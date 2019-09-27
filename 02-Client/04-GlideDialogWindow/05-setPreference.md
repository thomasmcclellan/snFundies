##### 9/27/2019
# `setPreference(name, value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The window property to set. |
| value | `string` | The value for the window property. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a given window property to a specified value.

Any window property can be set using this method.

---

```js
var gdw = new GlideDialogWindow('show_list');

gdw.setTitle('Test');
gdw.setSize(750, 300);
gdw.setPreference('table', 'u_test_list');
gdw.setPreference('title', 'A New Title');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GDW-setPreference_S_S)