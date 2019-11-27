##### 11/27/2019
# `getValue(fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |

## Return value:
| Type | Description |
|---|---|
| `string` | The value of the specified field. |

---

## Description:
Returns the value of the specified field.

---

```js
function onChange(control, oldValue, newValue, isLoading) {
  alert(g_form.getValue('short_description'));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetValue_String)