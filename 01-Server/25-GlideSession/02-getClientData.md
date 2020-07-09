##### 7/08/2020
# `getClientData(paramName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| paramName | `string` | Name of the client data to retrieve. |

## Return value:
| Type | Description |
|---|---|
| `string` | The client data as a `string`. |

---

## Description:
Retrieves a session client value previously set with `putClientData()`.

This method is used in a client script to retrieve data values that were set by a server script that used the `putClientData()` method.

---

```js
var session = gs.getSession(),
    clientData;

session.putClientData('test1', 'Harry');
clientData = session.getClientData('test1');

gs.info(clientData); // Harry
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetClientData_String)