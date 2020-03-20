##### 2/24/2020
# `addNotNullQuery(fieldName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The name of the field to be checked. |

## Return value:
| Type | Description |
|---|---|
| `GlideQueryCondition` | A filter that specifies records where the value of the field passed in the parameter is not `null`. |

---

## Description:
A filter that specifies records where the value of the field passed in the parameter is not `null`.

Always test queries on a sub-production instance prior to deploying them on a production instance.  An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query.  When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table.  Using an `insert()`, `update()`, `deleteRecord()`, or `deleteMultiple()` method on bad query results can result in data loss.

You can set the `glide.invalid_query.returns_no_rows` system property to `true` to have queries with invalid encoded queries return no records.

---

```js
var target = new GlideRecord('incident');
target.addNotNullQuery('short_description');
target.query(); // Issue the query to the database to get all records where short_description is not null

while (target.next()) {
  // add code here to process the incident record
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordAddNotNullQuery_String)