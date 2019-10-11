##### 10/08/2019
# `field(field)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| field | `string` | The field on which you are performing the `SQL` operation. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Defines a field on which a `SQL` operation is performed.

---

```js
var functionBuilder = new GlideDBFunctionBuilder();
var myAddingFunction = functionBuilder.add();

myAddingFunction = functionBuilder.field('order');
myAddingFunction = functionBuilder.field('priority');
myAddingFunction = functionBuilder.build();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-field_S)