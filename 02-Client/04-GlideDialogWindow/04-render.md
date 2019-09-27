##### 9/27/2019
# `render()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Renders the dialog window.

---

```js
var gdw = new GlideDialogWindow('show_list');

gdw.setTitle('Test');
gdw.setSize(750, 300);
gdw.setPreference('table', 'u_test_list');
gdw.setPreference('title', 'A New Title');
gdw.render();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GDW-render)