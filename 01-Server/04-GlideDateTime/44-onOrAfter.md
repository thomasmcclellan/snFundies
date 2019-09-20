##### 9/11/2019
# `onOrAfter(gdt)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gdt | `GlideDateTime` | the time to check against |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the `GlideDateTime` object's time is **on or after** the time specified by the parameter; otherwise, returns `false`. |

---

## Description:
Determines if the `GlideDateTime` object occurs **on or after** the specified `GlideDateTime`.

---

```js
var gdt1 = new GlideDateTime('2001-09-11 09:00:00');
var gdt2 = new GlideDateTime('2019-09-11 09:00:00');

gs.info(gdt1.onOrAfter(get2)); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SGDT-onOrAfter_GDT)