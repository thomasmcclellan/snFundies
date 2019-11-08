##### 11/05/2019
# `add(duration)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| duration | `GlideDuration` | The value to add to the `object`. |

## Return value:
| Type | Description |
|---|---|
| `GlideDuration` | The sum of the current and the added duration. |

---

## Description:
Add the specified duration to the `object`.

---

```js
var duration = new GlideDuration('3 12:00:00');
var duration2 = new GlideDuration('3:00:00');
var answer = duration.add(duration2);

gs.info(answer.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationAdd_GlideDuration)