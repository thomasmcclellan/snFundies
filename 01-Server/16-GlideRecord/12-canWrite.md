##### 3/03/2020
# `canWrite()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the user's roles permit writing of records in this table. * |

  > *Valid values:
  >   * `true`: writing permitted
  >   * `false`: writing is not permitted

---

## Description:
Determines if the Access Control Rules, which include the user's roles, permit editing records in this table.

---

```js
var gr = new GlideRecord('incident');

gs.info(gr.canWrite());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordCanWrite)