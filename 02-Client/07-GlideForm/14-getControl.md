##### 11/05/2019
# `getControl(fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |

## Return value:
| Type | Description |
|---|---|
| `HTMLElement` | The field's `HTML` element. |

---

## Description:
Returns the `HTML` element for the specified field.

Compound fields may contain several `HTML` elements.  This method is generally not necessary as there are built-in methods that use the fields on a form.

  > If the field is a reference field and the control is a choice list, `getControl()` may not return a control as expected.  In this case, use `sys_select.<table name>.<field name>`.

  > This method is not available in mobile scripts or Service Portal scripts.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetControl_String)