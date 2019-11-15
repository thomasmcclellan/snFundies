##### 11/14/2019
# `setDisplayValue(asDisplayed)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| asDisplayed | `string` | The duration in `'d HH:mm:ss'` format. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the display value.

---

```js
var dur = new GlideDuration();
dur.setDisplayValue('3 08:00:00');

gs.info(dur.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationSetDisplayValue_String)