##### 12/31/2019
# `showErrorBox(name, message, ?scrollForm)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of the control or field. |
| message | `string` | The message to be displayed. |
| scrollForm (**Optional**) | `boolean` | When `true`, scrolls the form to the field; otherwise, when `false`, the form does not scroll to the field. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Displays an error message under the specified form field (either a control `object` or the name of the field).  If the control or field is currently off the screen, the form scrolls to the control or field.

A global property (`glide.ui.scroll_to_message_field`) is available that controls automatic message scrolling when the form field is off screen (scrolls the form to the control or field).  The `showFieldMsg()` method is a similar method that requires a type parameter.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormShowErrorBox_String_String)