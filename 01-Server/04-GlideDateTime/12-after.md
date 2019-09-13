##### 8/06/2019
# `after(gdt)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gdt | `GlideDateTime` | The time to check against. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the `GlideDateTime` object's time is after the time specified by the parameter; otherwise, `false`. |

---

## Description:
Determines if the `GlideDateTime` object occurs after the specified `GlideDateTime`.

---

```js
var gdt1 = new GlideDateTime('2018-07-05 08:00:00');
var gdt2 = new GlideDateTime('2019-08-06 09:00:00');

gs.info(gdt1.after(gdt2)); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SGDT-after_GDT)