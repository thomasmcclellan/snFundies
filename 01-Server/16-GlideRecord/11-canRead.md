##### 3/02/2020
# `canRead()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the user's roles permit reading of records in this table. * |

  > *Valid values:
  >   * `true`: reading permitted
  >   * `false`: reading is not permitted

---

## Description:
Determines if the Access Control Rules, which include the user's roles, permit reading records in this table.

---

```js
var gr = new GlideRecord('incident');

gs.info(gr.canRead());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordCanRead)