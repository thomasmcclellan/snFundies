##### 7/24/2019
# `getValue()`

## Return value:
| Type | Description |
|---|---|
| String | The date value in the internal format and system time zone. |

---

## Description:
Gets the date value stored in the database by the `GlideDate` object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default.

---

```js
var gd = new GlideDate();

gd.setValue('2019-07-24');

gs.info(gd.getValue()) // 2019-07-24
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateGetValue)