##### 3/12/2020
# `getDisplayValue()`
## Return value:
| Type | Description |
|---|---|
| `string` | The display value for the current record. |

---

## Description:
Retrieves the display value for the current record.

---

```js
var gr = new GlideRecord('incident');
gr.get('sys_id', 'ef43c6d40a0a0b5700c77f9bf387afe3');

gs.info(gr.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetDisplayValue)