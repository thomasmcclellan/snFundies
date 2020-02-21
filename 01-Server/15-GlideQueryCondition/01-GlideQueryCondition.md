##### 2/12/2020
# `GlideQueryCondition`
## Overview:
The scoped `GlideQueryCondition` API provides additional `AND` or `OR` conditions that can be added to the current condition, allowing you to build complex queries.

Build complex queries like:

```js
category='hardware' OR category='software' AND priority='2' AND priority='1'
```

In the case of `addCondition()`, an implied `AND` is added.

This class has no constructor.  A `GlideQueryCondition` object is returned by the following methods:
  * `addActiveQuery()`
  * `addInactiveQuery()`
  * `addJoinQuery()`
  * `addNotNullQuery()`
  * `addNullQuery()`
  * `addQuery()`

If there is a complicated set of `AND` and `OR` queries, a single encoded query containing all conditions simplifies the query creation.  To simplify the query creation, create a query in a list view, right-click the query, and select **Copy query**.  It creates a single encoded query `string` to return your result set.  Use that `string` as a parameter in an `addEncodedQuery()` call.

Always test queries on a sub-production instance prior to deploying them on a production instance.  An incorrectly constructed encoded query, ushc as including an invalid field name, produces an invalid query.  When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table.  Using an `insert()`, `update()`, `deleteRecord()`, or `deleteMultiple()` method on bad query results can result in data loss.

You can set the `glide.invalid_query.returns_no_rows` system property to `true` to have queries with invalid encoded queries return no results.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideQueryConditionScopedAPI)