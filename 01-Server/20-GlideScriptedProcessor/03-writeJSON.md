##### 5/27/2020
# `writeJSON(obj)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| obj | `object` | The `object` to encode to a `JSON` `string`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Encodes an `object` as a `JSON` `string` and writes it to the current URL.

---

```js
var map = {
  "key1": "value1",
  "key2": "value2"
};

g_processor.writeJSON(map);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScriptedProcessorScopedAPI#r_ScopedGlideScriptedProcessorWriteJSON_Object)