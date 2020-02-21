##### 2/17/2020
# `GlideRecord(tableName)`
## Overview:
Scoped `GlideRecord` is used for database operations.

A `GlideRecord` contains both records adn fields.  For information about `GlideRecordSecure`, which is a class inherited from `GlideRecord` that performs the same `functions` as `GlideRecord`, and also enforces ACLs.

  > Always test queries on a sub-production instance prior to deploying them on a production instance.  An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query.  When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table.  Using an `insert()`, `update()`, `deleteRecord()`, or `deleteMultiple()` method on bad query results can result in data loss.

  You can set the `glide.invalid_query.returns_no_rows` system property to true to have queries with invalid encoded queries return no records.

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| tableName | `string` | The table to be used. |

---

## Description:
Creates an instance of the `GlideRecord` class for the specified table.

---

```js
var gr = new GlideRecord('incident');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideRecordScopedAPI)