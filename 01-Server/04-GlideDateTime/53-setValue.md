##### 9/19/2019
# `setValue(obj)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| obj | `string` | The date and time to use. * |

  > *This parameter may be one of several types:  
  > * A `string` in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss.  Sets the value of the object to the specified date and time.  Using the method this way is equivalent to instantiating the new `GlideDateTime` object using the `GlideDateTime(value)` constructor.  If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats.  Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values.  When using a non-standard date adn time format, use `setValueUTC(dt, format)` instead.
  > * A `GlideDateTime` object.  SEts the value of the object to the date and time stored by the `GlideDateTime` passed in the parameter.  Using the method this way is equivalent to instantiating a new `GlideDateTime` object using the `GlideDateTime(gdt)` constructor.
  > * A `JS` `number`.  Sets the value of the object using the `number` value as milliseconds past January 1, 1970 00:00:00 UTC.

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the date and time of the `GlideDateTime` object.

---

```js
var gdt = new GlideDateTime('2019-09-19 09:00:00');

gdt.setValue('2000-01-01 08:00:00');

gs.info(gdt.getValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeHasDateMethod)