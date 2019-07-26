##### 7/24/2019
# `setDisplayValue(asDisplayed)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| asDisplayed | String | The date int eh current user's display format and time zone.  The parameter must be formatted using the current user's preferred display format, such as yyyy-MM-dd. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Sets a date value using the current user's display format and time zone.

---

```js
var gd = new GlideDate();

gd.setDisplayValue('2019-07-24');

gs.info(gd.getValue()); // 2019-07-24
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateSetDisplayValue_String)