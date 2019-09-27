##### 9/27/2019
# `add()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds the values of two or more integer fields.

  > Use the `field(field)` method to define fields on which the operation is performed.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myAddingFunction = functionBuilder.add();

myAddingFunction = functionBuilder.field('order');
myAddingFunction = functionBuilder.field('priority');
myAddingFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-add)