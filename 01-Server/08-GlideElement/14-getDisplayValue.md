##### 12/11/2019
# `getDisplayValue(maxCharacters?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| maxCharacters (**Optional**) | `number` | Maximum characters desired. |

## Return value:
| Type | Description |
|---|---|
| `string` | The display value of the field. |

---

## Description:
Gets the formatted display value of the field.

---

```js
var glideRecord = new GlideRecord('incident');

glideRecord.query('priority', '1');
glideRecord.next();

gs.info(glideRecord.priority.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementGetDisplayValue_Number_maxCharacters)