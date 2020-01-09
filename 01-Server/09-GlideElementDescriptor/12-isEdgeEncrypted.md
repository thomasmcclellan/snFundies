##### 1/09/2020
# `isEdgeEncrypted()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the element is encrypted; otherwise, `false`. |

---

## Description:
Returns `true` if an element is encrypted.

This method is for use with the Edge Encryption plugin.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isChoiceTable = ed.isEdgeEncrypted();

gs.info(isChoiceTable); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorIsEdgeEncrypted)