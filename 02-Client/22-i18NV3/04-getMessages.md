##### 8/11/2020
# `getMessages(msgKeys, callback)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| msgKeys | `array` | An `array` of keys specifying the messages to be retrieved. |
| callback | `function` | The `function` to be called when the messages have been retrieved.  The callback `function` has one argument: an `object` containing key-value pairs, where key is the requested message key, and the value is the translated `string`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Retrieves a set of messages.

If the specified `string` exists in the database for the current language, then the translated message is returned.  If the specified `string` does not exist for the current language, then the English version of the `string` is returned.  If the `string` does not exist at all in the database, then the ID itself is returned.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_i18NV3API#r_i18NV3-getMessages_A_F)