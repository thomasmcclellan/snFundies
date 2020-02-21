##### 2/19/2020
# `getQuery(options)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| options | `object` | The options can be one or more listed below. * |

  > *The options can be one or more of the following:
  >   * `orderby`: include `ORDERBY` in the query
  >   * `groupby`: include `GROUPBY` in the query
  >   * `fixed`: include `sysparm_fixed_query` in the query
  >   * `all`: include all the options in the query

## Return value:
| Type | Description |
|---|---|
| `string` | Encoded query `string` for the list. |

---

## Description:
Returns the encoded query `string` for the list.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GLV3-getQuery_O)