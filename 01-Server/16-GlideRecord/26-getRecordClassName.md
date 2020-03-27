##### 3/23/2020
# `getRecordClassName()`
## Return value:
| Type | Description |
|---|---|
| `string` | The `class` name. |

---

## Description:
Retrieves the `class` name for the current record.

---

```js
var gr = new GlideRecord('incident'),
    recordClassName = gr.getRecordClassName();

gs.info(recordClassName); // incident
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetRecordClassName)