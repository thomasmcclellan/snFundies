##### 12/31/2019
# `setDisplayValue(value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| value | `object` | The value to set for the field. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the display value of a field.

---

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();

// Change the urgency to 3
glideRecord.urgency.setDisplayValue('3 - Low');

gs.info(glideRecord.urgency);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementSetDisplayValue_Object_value)