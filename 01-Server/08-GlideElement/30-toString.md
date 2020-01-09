##### 12/31/2019
# `toString(value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| value | `object` | `Object` value to set the field to. |

## Return value:
| Type | Description |
|---|---|
| `string` | The value of a `string`. |

---

## Description:
Converts the value to a `string`.

---

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();

gs.info(glideRecord.opened_at.toString());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementToString)