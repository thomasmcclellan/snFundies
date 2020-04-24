##### 4/14/2020
# `setCompletionCallback(callbackFunction)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| callbackFunction | `function` | The callback `function` to be called when the form has been successfully processed. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the `function` to be called when the form has been successfully submitted and processed by the server.

The callback `function` has the form `callbackFunction(action_verb, sys_id, table, displayValue)` where:
  * `action_verb` is an `action_name` from a `sys_ui_action` record
  * `sys_id` is the `sys_id` of the affected record
  * `table` is the name of the table containing the record
  * `displayValue`

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideModalFormV3API#r_GMFV3-setCompletionCallback_F)