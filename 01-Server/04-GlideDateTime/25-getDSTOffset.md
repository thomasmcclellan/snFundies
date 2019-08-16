##### 8/16/2019
# `getDTSOffset()`

## Return value:
| Type | Description |
|---|---|
| Number | Amount of time, in milliseconds, that daylight saving is offset.  Returns 0 if there is no offset or if the time is not during daylight savings time. |

---

## Description:
Gets the amount of time that daylight saving time is offset.

---

```js
var gdt = new GlideDateTime('2019-08-16 09:00:00');

gs.info(gdt.getDTSOffset());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDSTOffset)