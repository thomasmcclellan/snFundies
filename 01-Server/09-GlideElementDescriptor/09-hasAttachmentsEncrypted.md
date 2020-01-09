##### 1/09/2020
# `hasAttachmentsEncrypted()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if an encrypted attachment has been added to the table. |

---

## Description:
Returns `true` if an encrypted attachment has been added to the table.

This method is for use with the Edge Encryption plugin.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isEdge = ed.hasAttachmentsEncrypted();

gs.info(isEdge); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorHasAttachmentsEncrypted)