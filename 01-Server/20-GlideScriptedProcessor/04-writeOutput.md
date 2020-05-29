##### 5/27/2020
# `writeOutput(contentType?, str)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| contentType (**Optional**) | `string` | SEts the content type of the response sent to the client, if the response has not been committed, and may include a character-encoding specification. |
| str | `string` | The `string` to write. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Writes the specified `string` to the current URL in the specified character-encoding.

---

```js
var name = g_request.getParameter('name');
g_processor.writeOutput('text/plain', 'Hello ' + name);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScriptedProcessorScopedAPI#r_ScopedGlideScriptedProcessorWriteOutput_String_String)