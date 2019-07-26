##### 7/23/2019
# `getDisplayValue()`

## Return value:
| Type | Description |
|---|---|
| String | The date in the user's format and time zone. * |

  > *Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.

---

## Description:
Gets the date in the current user's display format and time zone.

---

```js
var gd = new GlideDate();

gd.setValue('2019-07-23');

gs.info(gd.getDisplayValue()); // 2019-07-23
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateGetDisplayValue)