##### 5/27/2020
# `insert(responseFunction)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| responseFunction | `function` | The response `function`. |

## Return value:
| Type | Description |
|---|---|
| `string` | The `sys_id` of the inserted record, or `null` if the record was not inserted. |

---

## Description:
Inserts a new record using the field values that have been set for the current record.

---

```js
var gr = new GlideRecord('to_do');
gr.initialize();
gr.name = 'first to do item';
gr.description = 'learn about GlideRecord';
gr.insert();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-insert_Function)