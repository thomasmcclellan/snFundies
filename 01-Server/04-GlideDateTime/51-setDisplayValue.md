##### 9/13/2019
# `setDisplayValue(asDisplayed)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| asDisplayed | `string` | The date and time in the current user's display format and time zone.  The parameter must be formatted using the current user's preferred display format, such as MM-dd-yyyy HH:mm:ss.  To assign the current date and time to a variable in a workflow script, use `<variable>.setDisplayValue(gs.nowDateTime);`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a date and time value using the current user's display format and time zone.

---

```js
var gdt = new GlideDateTime('2019-09-13 09:00:00');

gdt.setDisplayValue('2000-01-01 12:00:00'); // Uses current user session time zone (EST)

gs.info(gdt.getValue());
```

---

# `setDisplayValue(value, format);`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| value | `string` | The date and time in the current user's time zone. |
| format | `string` | The date and time format to use to parse the `value` parameter. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a date and time value using the current user's display format and time zone. This method throws a runtime exception if the date and time format used in the `value` parameter does not match the `format` parameter.  You can retrieve the error message by calling `getErrorMsg()` on the `GlideDateTime` object after the exception is caught.

---

```js
var gdt = new GlideDateTime('2019-09-13 09:00:00');

gdt.setDisplayValue('09-13-2019 09:00:00', 'dd-MM-yyy HH:mm:ss'); // Uses current user session time zone (EST)

gs.info(gdt.getValue());
```

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeSetDisplayValue_String_asDisplayed)