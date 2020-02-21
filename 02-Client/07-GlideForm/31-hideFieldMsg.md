##### 12/04/2019
# `hideFieldMsg(fieldName, clearAll?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| clearAll (**Optional**) | `boolean` | When `true`, all messages for the field are cleared; otherwise, when `false`, only the last message is removed. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Hides the last message placed by `showFieldMsg()`.

---

```js
g_form.hideFieldMsg('impact', true);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormHideFieldMsg_String)