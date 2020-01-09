##### 1/08/2020
# `getLength()`
## Return value:
| Type | Description |
|---|---|
| `number` | The element's size. |

---

## Description:
Returns the element's length.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isEdge = ed.getLength();

gs.info(isEdge);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorGetLength)