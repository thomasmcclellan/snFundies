##### 9/27/2019
# `adjustBodySize()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adjusts the body height of a dialog window to be the window height minus the header height.

  > You typically call this method after calling `GlideDialogWindow - setSize()`.

---

```js
var gdw = new GlideDialogWindow('show_list');

gdw.setTitle('Test');
gdw.setSize(750, 300);
gdw.adjustBodySize();
gdw.render();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GDW-adjustBodySize)