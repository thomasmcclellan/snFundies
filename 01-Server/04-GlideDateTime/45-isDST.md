##### 9/10/2019
# `isDST()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the time is daylight saving; otherwise returns `false`. |

---

## Description:
Determines if an object's time uses a daylight saving offset.

---

```js
var gdt = new GlideDateTime('2019-09-10 09:00:00');

gs.info(gdt.isDST()); // true
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeIsDST)