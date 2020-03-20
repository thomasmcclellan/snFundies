##### 2/27/2020
# `canCreate()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the user's roles permit creating of records in this table.<br>Valid values: `true` (creating permitted) and `false` (creating is not permitted). |

---

## Description:
Determines if the Access Control Rules, which include the user's roles, permit inserting new records in the table.

---

```js
var gr = new GlideRecord('incident');

gs.info(gr.canCreate());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordCanCreate)