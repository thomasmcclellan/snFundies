##### 1/07/2020
# `getLabel()`
## Return value:
| Type | Description |
|---|---|
| `string` | The element's label. |

---

## Description:
Returns the element's label.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority');
var ed = field.getED();
var isEdge = ed.getLabel();

gs.info(isEdge);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorGetLabel)