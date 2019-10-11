##### 10/10/2019
# `multiply()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Multiplies the values of two integer fields.

  > Use the `field(field)` method to define fields on which the operation is performed.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myMultiplyFunction = functionBuilder.multiply();

myMultiplyFunction = functionBuilder.field('order');
myMultiplyFunction = functionBuilder.field('priority');
myMultiplyFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-multiply)