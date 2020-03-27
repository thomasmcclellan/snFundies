##### 3/27/2020
# `getValue(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of the field to get the value from. |

## Return value:
| Type | Description |
|---|---|
| `string` | The `string` value of the underlying element.  Returns `null` if the field is empty or the field does not exist.  `Boolean` values return as '0' and '1' `string` values instead of `false` and `true`. |

---

## Description:
Retrieves the `string` value of an underlying element in a field.

---

```js
var gr = new GlideRecord('incident');
gr.orderBy('number');
gr.query('active', 'true');
gr.next();

gs.info(gr.getValue('number'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetValue_String)