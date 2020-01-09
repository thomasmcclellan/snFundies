##### 1/09/2020
# `isChoiceTable()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the element is defined as a dropdown choice.  Returns `true` even if there are no entries defined in the choice table.  The last choice type, suggestion, does not return `true`. |

---

## Description:
Returns `true` if the element is defined as a dropdown choice in its dictionary definition.

Choice fields cannot be encrypted.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isChoiceTable = ed.isChoiceTable();

gs.info(isChoiceTable); // true
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorIsChoiceTable)