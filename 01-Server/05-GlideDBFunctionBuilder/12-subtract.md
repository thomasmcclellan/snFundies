##### 10/11/2019
# `subtract()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Subtracts the value of one integer field from another.

  > Use the `field(field)` method to define fields on which the operation is performed.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var mySubtractFunction = functionBuilder.subtract();

mySubtractFunction = functionBuilder.field('order');
mySubtractFunction = functionBuilder.field('priority');
mySubtractFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-subtract)