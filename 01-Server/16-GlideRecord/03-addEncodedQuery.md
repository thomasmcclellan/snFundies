##### 2/19/2020
# `addEncodedQuery(query)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| query | `string` | An [encoded query `string`](https://docs.servicenow.com/bundle/newyork-platform-user-interface/page/use/using-lists/concept/c_EncodedQueryStrings.html?_ga=2.41299360.302675784.1581961744-1125510295.1570109335). |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds an encoded query to other queries that may have been set.

  > Always test queries on a sub-production instance prior to deploying them on a production instance.  An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query.  When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table.  Using an `insert()`, `update()`, `deleteRecord()`, or `deleteMultiple()` method on bad query results can result in data loss.

  You can set the `glide.invalid_query.returns_no_rows` system property to `true` to have queries with invalid encoded queries return no records.

---

```js
var queryString = 'priority=1^ORpriority=2',
    gr = new GlideRecord('incident');
gr.addEncodedQuery(queryString);
gr.query();

while (gr.next()) {
  gs.addInfoMessage(gr.number);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordAddEncodedQuery_String)