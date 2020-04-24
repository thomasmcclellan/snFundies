##### 4/21/2020
# `setLimit(maxNumRecords)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| maxNumRecords | `number` | The maximum number of records to fetch. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the limit for number of records are fetched by the `GlideRecord` query.

---

```js
var gr = new GlideRecord('incident');
gr.orderByDesc('sys_created_on');
gr.setLimit(10);
gr.query(); // this retrieves latest 10 incident records created
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordSetLimit_Number)