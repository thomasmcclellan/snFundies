##### 11/13/2019
# `getLabelOf(fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |

## Return value:
| Type | Description |
|---|---|
| `string` | The label text. |

---

## Description:
Returns the plain text value of the field label.

---

```js
if (g_user.hasRole('itil')) {
  var oldLabel = g_form.getLabelOf('comments');
  g_form.setLabelOf('comments', oldLabel + ' (Customer visible)');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetLabelOf_String)