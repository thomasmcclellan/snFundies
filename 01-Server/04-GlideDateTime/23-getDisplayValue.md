##### 8/15/2019
# `getDisplayValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The date and time in the user's format and time zone. * |

  > *Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.

---

## Description:
Ges the date adn time value in the current user's display format and time zone.

---

```js
var gdt = new GlideDateTime('2019-08-15 09:00:00');

gs.info(gdt.getDisplayValue()); // EST
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTimeGetDisplayValue)