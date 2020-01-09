##### 12/30/2019
# `nil()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the field is `null` or an empty `string`; otherwise, `false`. |

---

## Description:
Determines if a field is `null`.

---

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();

gs.info(glideRecord.state.nil());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementNil)