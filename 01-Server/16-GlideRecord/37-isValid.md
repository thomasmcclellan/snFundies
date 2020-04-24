##### 4/07/2020
# `isValid()
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if table is valid, or if record was successfully retrieved; `false` if table is invalid or record was not successfully retrieved. |

---

## Description:
Determines if the table exists.

---

```js
var gr = new GlideRecord('incident'),
    anotherGr = new GlideRecord('wrong_table_name');

gs.info(gr.isValid(gr)); // true
gs.info(gr.isValid(anotherGr)); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordIsValid)