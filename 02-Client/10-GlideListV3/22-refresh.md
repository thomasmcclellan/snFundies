##### 3/05/2020
# `refresh(firstRow?, additionalParams?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| firstRow (**Optional**) | `number` | The first row to display in the list.  If not specified, the list's current first row is used. |
| additionalParams (**Optional**) | `object` | Name-value pairs that are submitted with the list refresh request. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Refreshes the list.  The `orderBy` part of the list filter is ignored so that the list's natural ordering is used.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GLV3-refresh_N_O)