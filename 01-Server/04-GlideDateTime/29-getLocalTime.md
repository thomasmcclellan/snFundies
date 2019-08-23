##### 8/20/2019
# `getLocalTime()`

## Return value:
| Type | Description |
|---|---|
| GlideTime | The time in the user's time zone. |

---

## Description:
Returns a `GlideDateTime` object that represents the time portion of the `GlideDateTime` object in the user's time zone.

---

```js
var gdt = new GlideDateTime('2019-08-20 09:00:00'),
    gt = gdt.getLocalTime();

gs.info('Local time is ' + gt.getByFormat('hh:mm:ss')); // Local time is 09:00:00
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetLocalTime)