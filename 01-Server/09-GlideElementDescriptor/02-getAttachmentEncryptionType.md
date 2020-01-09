##### 1/02/2020
# `getAttachmentEncryptionType()`

## Return value:
| Type | Description |
|---|---|
| `string` | The encryption type used on attachments.  Returns `null` if attachments on the element's table are not being encrypted. |

---

## Description:
Returns the encryption type used for attachments on the element's table.

This method is for use with the Edge Encryption plugin.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority');
var ed = field.getED();
var idEdge = ed.getAttachmentEncryptionType();

gs.info(isEdge);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorGetAttachmentEncyrptionType)