##### 7/24/2019
# `setValue(newValue)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| newValue | String | The date and time to use. |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Sets the date of the `GlideDate` object.

---

```js
var gd = new GlideDate();

gd.setValue('2019-07-24');

gs.info(gd.getValue()); // 2019-07-24
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateSetValue_String)