##### 7/19/2019
# `getByFormat(format)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| format | `string` | The desired date format |

## Return value:
| Type | Description |
|---|---|
| `string` | The date in the specified format |

---

## Description:
Gets the date in the specified date format.

---

```js
var gd = GlideDate();

gd.setValue('2015-01-01');

gs.info(gd.getByFormat('dd-MM-yyyy')); // 01-01-2015
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateGlideDate)