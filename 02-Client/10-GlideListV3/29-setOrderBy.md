##### 3/16/2020
# `setOrderBy(orderBy)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| orderBy | `string` | Single or multiple order by fields. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the `orderBy` criteria for the list.

For a single order by field use `orderBy` field or `orderByDescField`.  For multiple fields, use `orderByField1^orderByField2^orderByField3`.  `orderBy` specifies ascending order and `orderByDesc` specifies descending.  These prefix `strings` are optional.  If not specified `orderBy` is assumed.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/r_GLV3-setOrderBy_S)