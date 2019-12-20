##### 12/17/2019
# `removeOption(fieldName, choiceValue)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| choiceValue | `string` | The value stored in the database.  this is not the label. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Removes the specified option from the choice list.

---

```js
g_form.removeOption('priority', '1');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormRemoveOption_String_String)