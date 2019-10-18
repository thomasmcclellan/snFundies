##### 10/18/2019
# `addOption(fieldName, choiceValue, choiceLabel)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The name of the field. |
| choiceValue | `string` | The value to be stored in the database. |
| choiceLabel | `string` | The value displayed. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a choice to the end of a choice list field.

---

```js
g_form.addOption('priority', '6', '6 - Really Low');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GDOC-getElement_S_E)