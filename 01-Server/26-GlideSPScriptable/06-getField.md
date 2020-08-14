##### 8/04/2020
# `getField(gr, fieldName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gr | `GlideRecord` | The `GlideRecord` to check. |
| fieldName | `string` | The field to find information for. |

## Return value:
| Type | Description |
|---|---|
| `object` | An `object` containing the field's `label`, `value`, `displayValue`, and `type`. Returns `null` if the `GlideRecord` of field name are not valid, or if the field is not readable.
 |

---

## Description:
Returns information about the specified field in the specified GlideRecord.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#r_GSPS-getField_GR_S)