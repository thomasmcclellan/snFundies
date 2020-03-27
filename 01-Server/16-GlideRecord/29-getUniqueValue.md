##### 3/26/2020
# `getUniqueValue()`
## Return value:
| Type | Description |
|---|---|
| `string` | The unique primary key as a `string`, or `null` if the key is `null`. |

---

## Description:
Gets the primary key of the record, which is usually the `sys_id` unless otherwise specified.

---

```js
var gr = new GlideRecord('kb_knowledge'),
    uniqueId;

gr.query();
gr.next();
uniqueId = gr.getUniqueValue();

gs.info(uniqueId);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetUniqueValue)