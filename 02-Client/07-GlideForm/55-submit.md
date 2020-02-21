##### 12/31/2019
# `submit(verb?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| verb (**Optional**) | `string` | An `action_name` from a `sys_ui_action` record.  The action name must be for a visible form button. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Saves the record.

The user is taken away from the form, returning them to where they were.

If the `verb` parameter is present, it performs the UI action specified by the parameter.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSubmit)