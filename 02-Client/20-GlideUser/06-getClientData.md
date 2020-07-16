##### 7/15/2020
# `getClientData(key)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| key | `string` | Name of the client data to retrieve. |

## Return value:
| Type | Description |
|---|---|
| `string` | Value of the client data. |

---

## Description:
Returns a session client value previously set with `putClientData()`.

Session client data is a set of named `strings` that may be setup on the server (using `putClientData()`) that then may be used by client scripts (using `getClientData()`). Can be used during form load time to get information that the client script needs to make decisions about the form, for example, which fields should be visible.

---

```js
var loginLanguage = g_user.getClientData('loginlanguage');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideUserAPI#r_GlideUser-getClientData_string)