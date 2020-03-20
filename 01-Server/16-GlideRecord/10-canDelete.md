##### 2/28/2020
# `canDelete()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the user's roles permit deleting of records in this table. * |

  > *Valid values:
  >   * `true`: deleting permitted
  >   * `false`: deleting is not permitted

---

## Description:
Determines if the Access Control Rules, which include the user's roles, permit deleting records in this table.

---

```js
var att = new GlideRecord('sys_attachment');

gs.info(att.canDelete());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordCanDelete)