##### 8/10/2020
# `getMessage(msgKey, callback)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| msgKey | `string` | The message to be retrieved. |
| callback | `function` | The `function` to be called when the message has been retrieved. The callback `function` has one argument: a `string` that is the translated message. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Retrieves a translated message.

If the specified `string` exists in the database for the current language, then the translated message is returned. If the specified `string` does not exist for the current language, then the English version fo the `string` is returned.  If the `string` does not exist at all in the database, then the ID itself is returned.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_i18NV3API#r_i18n-getMessage_S_F)