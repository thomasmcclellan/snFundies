##### 12/09/2019
# `getChoiceValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The selected choice's label. |

---

## Description:
Returns the choice label for the current choice.

  > A choice has a value (`number`) and a label (`string`).  This method returns the label.

---

```js
var glideRecord = new GlideRecord('incident');
var choiceLabel = glideRecord.urgency.getChoiceValue();

glideRecord.query('priority', '1');
glideRecord.next();

gs.info(choiceLabel); // 1 - High
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementGetChoiceValue)