##### 9/13/2019
# `setDisplayValueInternal(value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| value | `string` | The date and time in internal format. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a date and time value using the internal display format (yyyy-MM-dd) and the current user's time zone.

---

```js
var gdt = new GlideDateTime('2019-09-13 09:00:00');

gdt.setDisplayValueInternal('2000-01-01 12:00:00'); // Uses current user session time zone (EST)

gs.info(gdt.getValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeSetDisplayValueInternal_String_value)