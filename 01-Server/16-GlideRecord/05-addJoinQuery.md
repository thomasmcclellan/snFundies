##### 2/21/2020
# `addJoinQuery(joinTable, primaryField?, joinTableField?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| joinTable | `string` | Name of the table to use in the join, such as `incident`. |
| primaryField (**Optional**) | `string` | Name of the field in the `GlideRecord` to use to join the field specified in the `joinTableField` parameter.<br>Default: `sys_id`. |
| joinTableField (**Optional**) | `string` | Name of the field in the table specified in the `joinTable` to use to join the tables.<br>Default: First field in the table specified in `joinTable` that is a reference field to the current `GlideRecord` table. |

## Return value:
| Type | Description |
|---|---|
| `GlideQueryCondition` | Filter that lists records where the relationships match. |

---

## Description:
Adds a filter to return records based on a relationship in a table related to the current `GlideRecord`.

You can use this method to find all the users that are in the database group via the Group Member [`sys_user_grmember`] table, or to find all problems that have an assigned incident via the `incident.problem_id` relationship.

  > **NOTE**: This is not a true database join; rather, `addJoinQuery()` adds a subquery.  So, while the result set is limited based on the join, the only fields that you have access to are those on the base table (those which are in the table with which the `GlideRecord` was initialized).

Always test queries on a sub-production instance prior to deploying them on a production instance.  An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query.  When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from teh table.  Using an `insert()`, `update()`, `deleteRecord()`, or `deleteMultiple()` method on bad query results can result in data loss.

You can set the `glide.invalid_query.returns_no_rows` system property to `true` to have queries with invalid encoded queries return no results.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordAddJoinQuery_String_Object_Object)