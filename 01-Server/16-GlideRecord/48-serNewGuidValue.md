##### 4/22/2020
# `setNewGuidValue(guid)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| guid | `string` | The GUID to be assigned to the current record. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets `sys_id` value for the current record.

---

```js
var gr = new GlideRecord('incident');
gr.short_description = 'The third floor printer is broken';
gr.setNewGuidValue('eb4636ca6f6d31005be8883e6b3ee333');
gr.insert();

gs.info(gr.sys_id);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordSetNewGuidValue_String)