##### 2/26/2020
# `addQuery(name, operator?, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Table field name. * |
| operator (**Optional**) | `string` | Query operator. ** |
| value | `object` | Value on which to query (not case-sensitive) |

  > *If you are querying a table field, use these reserved variables:
  >   * `123TEXTQUERY321`: adds a search term to the query.  Use this option to return matching values from any field in the table.  Use the term you want to query as the value.
  >   * `123TEXTINDEXGROUP321`: adds a text index group to the query.  Use the name of thet ext index group from the Text Index Groups `[ts_index_group]` table you want to query as the value.  For more information about text index groups, see [Configure multiple tables for indexing and searching](https://docs.servicenow.com/bundle/newyork-platform-administration/page/administer/search-administration/task/index-multiple-tables.html?_ga=2.234091230.1171876991.1582561484-1125510295.1570109335).

  > **The available values are dependent on the data type of the **_value_** parameter.
  > `Numbers`:
  >   * `=`
  >   * `!=`
  >   * `>`
  >   * `>=`
  >   * `<`
  >   * `<=`
  >
  > `Strings` (must be in upper case):
  >   * `=`
  >   * `!=`
  >   * `IN`
  >   * `NOT IN`
  >   * `STARTSWITH`
  >   * `ENDSWITH`
  >   * `CONTAINS`
  >   * `DOES NOT CONTAIN`
  >   * `INSTANCEOF`

## Return value:
| Type | Description |
|---|---|
| `GlideQueryCondition` | The query condition added to the `GlideRecord`. |

---

## Description:
Build a search query and return the rows that match the request.

If you are familiar with `SQL`, this method is similar to the `'where'` clause.  One or more `addQuery()` calls can be made in a single query; in this case the queries are `AND`'ed.  It any of the query statements need to be `OR`'ed, use the `GlideQueryCondition()` method `addOrCondition()`.

When `addQuery()` is called with only two parameters, table field and comparison value, such as `myObj.addQuery('category', 'Hardware')`, the operator in this case is assumed to be `'equal to'`.

Always test queries on a sub-production instance prior to deploying them on a production instance.  An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query.  When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table.  Using `insert()`, `update()`, `deleteRecord()`, or `deleteMultiple()` method on bad query results can result in data loss.

You can set the `glide.invalid_query.returns_no_rows` system property to `true` to have queries with invalid encoded queries return no records.

---

```js
var rec = new GlideRecord('incident');
rec.addQuery('active', true);
rec.query();

while (rec.next()) {
  rec.active = false;

  gs.info('Active incident ' + rec.number + ' closed.');

  rec.update();
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordAddQuery_String_Object)