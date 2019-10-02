##### 9/30/2019
# `build()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Builds the database function defined by the `GlideDBFunctionBuilder` object.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myAddingFunction = functionBuilder.add();

myAddingFunction = functionBuilder.field('order');
myAddingFunction = functionBuilder.field('priority');
myAddingFunction = functionBuilder.build();

gs.print(myAddingFunction);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-build)