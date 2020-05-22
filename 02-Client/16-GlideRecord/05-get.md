##### 5/19/2020
# `get(sys_id)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| sys_id | `object` | The `sys_id` of the record to be found. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if one or more matching records was found; `false` if no records were found. |

---

## Description:
Executes a `GlideRecord` query for a record with the specified `sys_id`.  This method is expected to be used to query for a single records, so a `next` operation is performed before running.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-get_O)