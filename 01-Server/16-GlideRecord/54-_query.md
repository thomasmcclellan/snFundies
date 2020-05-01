##### 4/30/2020
# `_query(field?, value?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| field (**Optional**) | `object` | Column name on which to query. |
| value (**Optional**) | `object` | Value for which to query. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Identical to `query()`.  This method is intended to be used on tables where there is a column named query, which would interfere with using the `query()` method.

Runs the query against the table based on the filters specified by the `addQuery()` and `addEncodedQuery()` methods.  This method queries the `GlideRecord` table as well as any references of the table.  Typically this method is called without arguments.  If a name/value pair is specified, the `name=value` condition is added to the query.

---

```js
var rec = new GlideRecord('incident');
rec._query();

while (rec.next()) {
  gs.print(rec.number + ' exists');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#SGR-_query_O_O)