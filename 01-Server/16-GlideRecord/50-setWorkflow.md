##### 4/24/2020
# `setWorkflow(enable)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| enable | `boolean` | If `true` (default), enables BRs; if `false`, disables BRs. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Enables or disables the running of BRs, scripts engines, and audit.

---

```js
// Enable business rules, script engines for x_app_table
var gr = new GlideRecord('x_app_table');
gr.setWorkflow(true);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordSetWorkflow_Boolean)