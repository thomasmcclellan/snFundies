##### 12/10/2019
# `isNewRecord()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the record has not been saved; otherwise, `false`. |

---

## Description:
Returns `true` if the record has never been saved.

---

```js
function onLoad() {
  if (g_form.isNewRecord())
    alert('New Record!');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormIsNewRecord)