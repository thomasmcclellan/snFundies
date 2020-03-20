##### 3/17/2020
# `getEncodedQuery()`
## Return value:
| Type | Description |
|---|---|
| `string` | The encoded query as a `string`. |

---

## Description:
Retrieves the query condition of the current result set as an encoded query `string`.

---

```js
var gr = new GlideRecord('incident'),
    encodedQuery;
gr.addQuery('active', true);
gr.addQuery('priority', 1);
gr.query();

encodedQuery = gr.getEncodedQuery();

gs.info(encodedQuery);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetEncodedQuery)