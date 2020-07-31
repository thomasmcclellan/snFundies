##### 7/27/2020
# `putClientData(paramName, paramValue)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| paramName | `string` | Name of the client data to set. |
| paramValue | `string` | Value of the client data. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a session client value that can be retrieved with `getClientData()`.  This method is used in a server side script that runs when a form is created.

---

```js
var session = gs.getSession(),
    clientData;

session.putClientData('test1', 'Harry');
clientData = session.getClientData('test1');

gs.info(clientData); // Harry
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionPutClientData_String_String)