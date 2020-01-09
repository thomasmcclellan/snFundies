##### 12/26/2019
# `setLabelOf(fieldName, label)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |
| label | `string` | The field text label. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the plain text value of the field label.

  > **NOTE**: This method is not supported by Service Catalog.

---

```js
if (g_user.hasRole('itil')) {
  var oldLabel = g_form.getLabelOf('comments');
  g_form.setLabelOf('comments', oldLabel + ' (Customer visible)');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSetLabelOf_String_String)