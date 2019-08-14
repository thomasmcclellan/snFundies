##### 8/07/2019
# `before(gdt)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gdt | GlideDateTime | The time to check against. |

## Return value:
| Type | Description |
|---|---|
| Boolean | Returns `true` if the `GlideDateTime` object's time is before the time specified by the parameter; otherwise, `false`. |

---

## Description:
Determines if the `GlideDateTime` object occurs before the specified `GlideDateTime`.

---

```js
var gdt1 = new GlideDateTime('2018-07-06 08:00:00');
var gdt2 = new GlideDateTime('2019-08-07 09:00:00');

gs.info(gdt1.after(gdt2)); // true
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SGDT-before_GDT)