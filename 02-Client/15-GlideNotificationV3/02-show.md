##### 5/12/2020
# `show(type, message)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| type | `string` | The type of message: error, warning, info. |
| message | `string` | The message. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Displays the specified `string` over the page content as the specified type of message.

---

```js
// Displays an info message at the top of the screen
nowapi.g_notification.show('info', 'The record has been updated');

// Displays an error message at the top of the screen
nowapi.g_notification.show('error', 'You need to provide notes');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideNotificationV3#r_GNOTV3-show_S_S)