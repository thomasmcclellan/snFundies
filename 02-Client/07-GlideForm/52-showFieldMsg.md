##### 12/31/2019
# `showFieldMsg(field, message, type, scrollForm?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| field | `string` | Name of the field or control. |
| message | `string` | Message to display. |
| type | `string` | `'error'`, `'info'`, or `'warning'`. |
| scrollForm (**Optional**) | `boolean` | When `true`, the form scrolls to the field if it is off screen; otherwise, when `false`, the form does not scroll. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Displays either an informational or error message under the specified form field (either a control object or the name of the field). If the control or field is off the screen, the form is scrolled to the field.

A global property (`glide.ui.scroll_to_message_field`) is available that controls automatic message scrolling when the form field is off screen (scrolls the form to the control or field).

The `showErrorBox()` method is a shorthand method that does not require the type parameter.

  > **NOTE**: This method does not work with the journal_field type field in UI16.

---

```js
g_form.showFieldMsg('impact','Low impact response time can be one week','info');
g_form.showFieldMsg('impact','Low impact not allowed with High priority','error',false);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormShowFieldMsg_String_String_String)