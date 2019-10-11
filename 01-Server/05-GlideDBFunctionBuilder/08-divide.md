##### 10/07/2019
# `divide()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Divides the value of one integer field by another.

Use the `field(field)` method to define fields on which the operation is performed.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myDivideFunction = functionBuilder.divide();

myDivideFunction = functionBuilder.field('order');
myDivideFunction = functionBuilder.field('priority');
myDivideFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-divide)