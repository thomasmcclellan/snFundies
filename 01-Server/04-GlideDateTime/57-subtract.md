##### 9/23/2019
# `subtract(start, end)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| start | `GlideDateTime` | The start value. |
| end | `GlideDateTime` | The end value. |

## Return value:
| Type | Description |
|---|---|
| `GlideDuration` | The duration between the two values. |

---

## Description:
Gets the duration between two `GlideDateTime` values.

---

```js
var gdt1 = new GlideDateTime('2019-09-20 09:00:00');
var gdt2 = new GlideDateTime('2019-09-23 09:00:00');
var dur = GlideDateTime.subtract(gdt1, gdt2)

gs.info(dur.getDisplayValue()); // 3 days
```

---

# `subtract(time)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| time | `GlideTime` | The time value to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Subtracts a specified amount of time from the current `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime('2019-09-20 09:00:00');
var gtime1 = new GlideTime();
var gtime1 = gdt.getTime();

gtime1.setValue('00:00:20');
gdt.subtract(gtime1);

gs.info(gtime2.getByFormat('hh:mm:ss')); // 08:59:40
```

---

# `subtract(milliseconds)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| milliseconds | `number` | The number of milliseconds to subtract. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Subtracts a specified number of milliseconds from the `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime('2019-09-20 09:00:00');

gdt.subtract(1000);

gs.info(gtime2.getValue()); // 2019-09-20 08:59:59
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeSubtract_GlideDateTime_GlideDate_Time)