##### 9/19/2019
# `setValueUTC(dt, format)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| dt | `string` | The date and time to use. |
| format | `string` | The date and time format to use. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the date and time of the `GlideDateTime` object using the UTC time zone and the specified date and time format.  This method throws a runtime exception if the date and time format used int he `dt` parameter does not match the `format` parameter.  You can retrieve the error message by calling `getErrorMsg()` on the `GlideDateTime` object after the exception is caught.

---

```js
var gdt = new GlideDateTime('2019-09-19 09:00:00');

gdt.setValueUTC('2000-01-01 08:00:00', 'dd-MM-yyyy HH:mm:ss');

gs.info(gdt.getValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDateTimeSetValueUTC_String_dt_String_format)