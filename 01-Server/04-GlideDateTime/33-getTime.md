##### 8/22/2019
# `getTime()`

## Return value:
| Type | Description |
|---|---|
| `GlideTime` | The `Unix` duration stamp in system format based on GMT time. |

---

## Description:
Returns a `GlideTime` object that represents the time portion of the `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime('2019-08-22 09:00:00'),
    gt = gdt.getTime();

gs.info(gt.getByFormat('hh:mm:ss'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetTime)