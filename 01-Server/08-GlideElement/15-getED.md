##### 12/12/2019
# `getED()`

## Return value:
| Type | Description |
|---|---|
| Scoped `GlideElementDescriptor` | The field's element descriptor. |

---

## Description:
Returns the field's element descriptor.

---

```js
var grInc = new GlideRecord('incident');
var field = grInc.getElement('priority');
var ed = field.getED();

grInc.query('priority', '1');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementGetED)