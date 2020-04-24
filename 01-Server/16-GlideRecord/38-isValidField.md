##### 4/08/2020
# `isValidField(columnName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| columnName | `string` | The name of the field. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the field is defined for the current table. |

---

## Description:
Determines if the specified field is defined in the current table.

---

```js
var gr = new GlideRecord('incident');
gr.initialize();

gs.info(gr.isValidField('short_description'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordIsValidField)