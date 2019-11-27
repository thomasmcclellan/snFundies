##### 11/26/2019
# `getUniqueValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The record's `sys_id`. |

---

## Description:
Returns the `sys_id` of the record displayed in the form.

---

```js
function onLoad() {
  var incSysid = g_form.getUniqueValue();

  alert(incSysid);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetUniqueValue)