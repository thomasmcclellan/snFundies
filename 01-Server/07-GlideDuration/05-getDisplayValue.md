##### 11/08/2019
# `getDisplayValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The number of days, hours, and minutes. |

---

## Description:
Gets the display value of the duration in number of days, hours, and minutes.

---

```js
var dur = new GlideDuration('3 12:00:00');

gs.info(dur.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationGetDisplayValue)