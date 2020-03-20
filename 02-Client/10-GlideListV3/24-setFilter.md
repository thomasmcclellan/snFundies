##### 3/09/2020
# `setFilter(filter, saveOrderBy, saveGroupBy)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| filter | `string` | An encoded query `string`. |
| saveOrderBy | `boolean` | The default is `false`.  When `true` uses the `orderBy` part of the query. |
| saveGroupBy | `boolean` | The default is `false`.  When `true` uses the `groupBy` part of the query. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the encoded query `string` for the list ignoring the `orderBy` and `groupBy` parts of the query `string`.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GLV3-setFilter_S_B_B)