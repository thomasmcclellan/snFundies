##### 9/11/2019
# `onOrBefore(gdt)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gdt | `GlideDateTime` | the time to check against |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the `GlideDateTime` object's time is **on or before** the time specified by the parameter; otherwise, returns `false`. |

---

## Description:
Determines if the `GlideDateTime` object occurs **on or before** the specified `GlideDateTime`.

---

```js
var gdt1 = new GlideDateTime('2001-09-11 09:00:00');
var gdt2 = new GlideDateTime('2019-09-11 09:00:00');

gs.info(gdt1.onOrBefore(get2)); // true
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SGDT-onOrBefore_GDT)