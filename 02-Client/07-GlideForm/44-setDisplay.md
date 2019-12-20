##### 12/20/2019
# `setDisplay(fieldName, display)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| display | `boolean` | When `true`, displays the field; when `false`, hides the field. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Displays/hides a field.

  > This method cannot hide a _mandatory_ field with no value.  If the field is hidden, the space is used to display other items.  Whenever possible, use a UI Policy instead of this method.

---

```js
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  // If the page isn't loading
  if (!isLoading) {
    // If the new value isn't blank
    if (newValue != '') 
      g_form.setDisplay('priority', false);
    else
      g_form.setDisplay('priority', true);
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSetDisplay_String_Boolean)