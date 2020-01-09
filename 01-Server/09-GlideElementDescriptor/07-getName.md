##### 1/09/2020
# `getName()`
## Return value:
| Type | Description |
|---|---|
| `string` | The element's name. |

---

## Description:
Returns the element's name.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isEdge = ed.getName();

gs.info(isEdge);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorGetName)