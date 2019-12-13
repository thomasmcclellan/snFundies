##### 12/09/2019
# `getChoices(?dependent)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| dependent (**Optional**) | `string` | A dependent value. |

## Return value:
| Type | Description |
|---|---|
| `array` | An `array` list of choices. |

---

## Description:
Generates a choice list for a field.

---

```js
var glideRecord = new GlideRecord('incident');
var choices = glideRecord.urgency.getChoices();

glideRecord.query('priority', '1');
glideRecord.next();

gs.info(choices);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementGetChoices_String_dependent)