##### 12/31/2019
# `setVisible(fieldName, display)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |
| display | `boolean` | When `true`, displays the field; otherwise, `false`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Displays/hides the field.

On desktop UI, the space is left blank when hidden.  On mobile or Service Portal UI, the space is filled in by other fields when hidden.  This method cannot hide mandatory fields with no value.  

Use UI Policy rather than this method whenever possible.

---

```js
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  // If the page isn't loading
  if (!isLoading) {
    // If the new value isn't blank
    if (newvalue !== '')
      g_form.setVisible('priority', false); 
    else
      g_form.setVisible('priority', true); 
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSetVisible_String_Boolean)