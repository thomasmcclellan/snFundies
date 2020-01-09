##### 1/03/2020
# `getEncryptionType()`
## Return value:
| Type | Description |
|---|---|
| `string` | The element's encryption type.  Returns `null` if the element is not encrypted. |

---

## Description:
Returns the element's encryption type.

This method is for use with the Edge Encryption plugin.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isEdge = ed.getEncryptionType();

gs.info(isEdge); // null
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorGetEncryptionType)