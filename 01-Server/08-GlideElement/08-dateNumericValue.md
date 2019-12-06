##### 12/04/2019
# `dateNumericValue()`

## Return value:
| Type | Description |
|---|---|
| `number` | Number of milliseconds since January 1, 1970, 00:00:00 UTC. |

---

## Description:
Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for a duration field.  Does not require the creation of a `GlideDateTime` `object` because the duration field is already a `GlideDateTime`.

---

```js
var inc = new GlideRecord('incident');

inc.get('17c90efb13418700cc36b1422244b05d');

gs.info(inc.calendar_duration.dateNumericValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-dateNumericValue)