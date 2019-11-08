##### 11/06/2019
# `getDecimalValue(fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The name of the field. |

## Return value:
| Type | Description |
|---|---|
| `string` | The decimal value of the specified field. |

---

## Description:
Returns the decimal value of the specified field.

---

```js
function onChange(control, oldValue, newValue, isLoading) {
  alert(g_form.getDecimalValue('percent_complete'));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetDecimalValue_String)