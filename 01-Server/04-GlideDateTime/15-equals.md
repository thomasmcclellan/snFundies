##### 8/09/2019
# `equals(dateTime)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| dateTime | `GlideDateTime` object or `string` | The date time to compare. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if they are equal; otherwise, `false`. |

---

## Description:
Compares the date time with an existing value for equality.

---

```js
var gdt = new GlideDateTime('2019-08-09 00:00:00');

gs.info(gdt.equals('2000-01-01 00:00:00')); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeEquals_Object)