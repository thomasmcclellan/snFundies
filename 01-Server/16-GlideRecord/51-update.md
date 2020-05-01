##### 4/27/2020
# `update(reason?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| reason (**Optional**) | `string` | Reason for the update.  The reason is displayed in the audit record. |

## Return value:
| Type | Description |
|---|---|
| `string` | The `sys_id` of the new or updated record.  Returns `null` if the update fails. |

---

## Description:
Updates the `GlideRecord` with any changes that have been made.  If the record does not already exist, it is inserted.

---

```js
var gr = new GlideRecord('incident');
gr.get('99ebb4156fa831005be8883e6b3ee4b9');
gr.short_description = 'Update the short description';
gr.update();

gs.info(gr.getElement('short_description'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordUpdate_String)