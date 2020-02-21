##### 2/20/2020
# `addFunction(function)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| function | `object` | A `GlideDBFunctionBuilder` object that defines a `SQL` operation. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Applies a pre-defined `GlideDBFunctionBuilder` object to a record.

Use the `GlideDBFunctionBuilder` scope class to define a `function`.  After the `function` is defined, use the `addFunction()` method to apply the `function` to a record.

---

```js
var functionBuilder = new GlideDBFunctionBuilder(),
    myAddingFunction = functionBuilder.add(),
    gr = new GlideRecord('incident');
myAddingFunction = functionBuilder.field('order');
myAddingFunction = functionBuilder.field('priority');
myAddingFunction = functionBuilder.build();

gr.addFunction(myAddingFunction);
gr.addQuery(myAddingFunction, '<', 5);
gr.query();

while (gr.next()) {
  gs.log(gr.getValue(myAddingFunction));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordAddFunction_O)