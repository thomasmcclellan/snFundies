##### 7/26/2019
# `GlideDateTime()`
## Overview:
The scoped `GlideDateTime` class provides methods for performing operations ont the `GlideDateTime` objects, such as instantiating `GlideDateTime` objects or working with `glide_date` fields.  

  >Use the `GlideDateTime` methods to perform `date-time` operations, such as instantiating a `GlideDateTime` object, performing `date-time` calculations, formating a `date-time`, or converting between `date-time` formats.

---

## Description:
Instantiates a new `GlideDateTime` object with the current date and time in GMT.

---

# `GlideDateTime(time)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| time | GlideDateTime | The `GlideDateTime` object to use for setting the time of the new object. |

---

## Description:
Instantiates a new `GlideDateTime` object set to the time of the `GlideDateTime` object passed in the parameter.

---

```js
var start = new GlideDateTime('2019-07-26 12:00:00'),
    end = new GlideDateTime(start);

gs.info(end);
```

---

# `GlideDateTime(value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| value | String | A UTC date and time using the internal format yyyy-MM-dd HH:mm:ss. |

---

## Description:
Instantiates a new `GlideDateTime` object from a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.

---

```js
var gdt = new GlideDateTime('209-07-26 12:00:00');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGlideDateTime)