##### 10/09/2019
# `length()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Determines the number of code units in a field.

Use the `field(field)` method to define fields on which the operation is performed.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myLengthFunction = functionBuilder.length();

myLengthFunction = functionBuilder.field('short_description');
myLengthFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-length)