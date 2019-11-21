##### 11/18/2019
# `subtract(duration)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| duration | `GlideDuration` | The duration to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Subtracts the specified duration from the current duration.

---

```js
var duration1 = new GlideDuration('3 12:00:00');
var duration2 = new GlideDuration('3:00:00');
var answer = duration1.subtract(duration2);

gs.info(answer.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationSubtract_GlideDuration)