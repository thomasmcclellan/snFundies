##### 7/25/2019
# `add(gd)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gd | GlideTime | The `GlideTime` object to add. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Adds a `GlideTime` object to the current `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime('2019-07-25 09:00:00');
var gTime1 = new GlideTime();

gTime1 = setValue('00:00:20');

var gTime2 = gdt.getTime();

gdt.add(gTime1);

gs.info(gTime2.getByFormat('hh:mm:ss'));
```

---

# `add(milliseconds)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| milliseconds | Number | The number of milliseconds to add. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Adds a `GlideTime` object to the current `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime("2019-07-25 09:00:00");

gs.info(gdt.getNumericValue());

gdt.add(10);

gs.info(gdt.getNumericValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateSubtract_GlideDate_GlideDate)