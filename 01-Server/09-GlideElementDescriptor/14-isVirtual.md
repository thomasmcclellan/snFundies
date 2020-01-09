##### 1/09/2020
# `isVirtual()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the element is a virtual element. |

---

## Description:
Returns `true` if the element is a virtual element.

A virtual element is a calculated field as set by the dictionary definition of the field.  Virtual fields cannot be encrypted.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isChoiceTable = ed.isVirtual();

gs.info(isChoiceTable); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorIsVirtual)