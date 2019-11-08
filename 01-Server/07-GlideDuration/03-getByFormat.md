##### 11/06/2019
# `getByFormat(format)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| format | `string` | The duration format. |

## Return value:
| Type | Description |
|---|---|
| `string` | The current duration in the specified format. |

---

## Description:
Gets the duration in the specified format.

---

```js
var dur = new GlideDuration('3 22:00:00');

gs.info(dur.getByFormat('HH:mm'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationGetByFormat_String)