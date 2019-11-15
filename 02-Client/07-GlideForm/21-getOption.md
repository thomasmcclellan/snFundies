##### 11/14/2019
# `getOption(fieldName, choiceValue)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| choiceValue | `string` | Value of the option. |

## Return value:
| Type | Description |
|---|---|
| `HTMLElement` | The `HTMLElement` for the option.  Returns `null` if the field or option is not found. |

---

## Description:
Returns the option element for a selected box named `fieldName` where `choiceValue` matches the option value.

  > **NOTE**: This method does not work on read-only fields.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetOption_String_String)