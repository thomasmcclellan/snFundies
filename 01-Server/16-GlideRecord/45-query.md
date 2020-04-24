##### 4/17/2020
# `query(field, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| field | `object` | Column name to query on. |
| value | `object` | Value to query on. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Runs the query aginst the table based on the filters specified by `addQuery()`, `addEncodedQuery()`, etc.

This queries the `GlideRecord` table as well as any reference of the table.  Usually this is performed without arguments.  If name/value pair is specified, `'name=value'` condition is added to the query.

  > **NOTE**: This method fails if there is a field in the table called `query`.  If that is the case, use the method `_query()`.

---

```js
var rec = new GlideRecord('incident');
rec.query();

while (rec.next()) {
  gs.info(rec.number + ' exists');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordQuery_Object_Object)