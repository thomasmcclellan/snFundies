##### 12/31/2019
# `setValue(fieldName, value, displayValue?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| value | `string` | Value in the database. Can be an `array` of system IDs if the field is a `glide-list`. |
| displayValue (**Optional**) | `string` | Display name for the referenced value int he database.  Can be an `array` of display names if the field is a `glide-list`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the value of a field.

When defining a value in a choice list, be sure to use _number_ value rather than the _label_.

To improve performance by preventing a round trip, include a display value in addition to the value, use the `displayValue` parameter.

  > **NOTE**: The method `setValue()` can cause a stack overflow when used in an OnChange client script.  This is because every time the value is set, it will register as a change, which may re-trigger the OnChange client script.  To prevent this, perform a check that will validate that the new value will be different from the old value.  For example, before performing `setValue(shortDesc, newValue.toUpperCase());`, validate that the short description is not already uppercase.  This will prevent the client script from applying the `toUpperCause()` more than once.

---

```js
g_form.setValue('short_description', 'replace this with appropriate text');
g_form.setValue('assigned_to', userSysID, userName);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSetValue_String_String)