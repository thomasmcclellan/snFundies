##### 9/10/2019
# `isValid()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` is value is valid; otherwise, return `false`. |

---

## Description:
Determines if a value is a valid date and time.

---

```js
var gdt = new GlideDateTime();

gdt.setDisplayValue('2019-aa-10 09:00:00');

gs.info(gdt.isValid()); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeIsValid)