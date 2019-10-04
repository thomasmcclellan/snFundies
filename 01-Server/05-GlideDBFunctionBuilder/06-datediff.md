##### 10/03/2019
# `datediff()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Determines the duraction using a given start date/time and an end date/time.

Use the `field(field)` method to define start and end date/time fields.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myDateDiffFunction = functionBuilder.datediff();

myDateDiffFunction = functionBuilder.field('sys_updated_on');
myDateDiffFunction = functionBuilder.field('opened_at');
myDateDiffFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-datediff)