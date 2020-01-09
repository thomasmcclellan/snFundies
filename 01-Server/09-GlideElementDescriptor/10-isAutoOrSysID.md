##### 1/09/2020
# `isAutoOrSysID()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the element is automatically generated or a system field. |

---

## Description:
Returns `true` if the element is an automatically generated or system field.

Automatically generated and system fields cannot be encrypted.  This method is for use with the Edge Encryption plugin.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isEdge = ed.isAutoOrSysID();

gs.info(isEdge); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorIsAutoOrSysID)