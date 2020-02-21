##### 2/13/2020
# `addCondition(name, oper?, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of a field. |
| oper (**Optional**) | `string` | The operator for the query.  If you do not specify an operator, the condition uses an equals operator. |
| value | `object` | The value to query on. |

## Return value:
| Type | Description |
|---|---|
| `GlideQueryCondition` | A reference to a `GlideQueryCondition` that was added to the `GlideRecord`. |

---

## Description:
Adds an `AND` condition to the current condition.

---

```js
var gr = new GlideRecord('incident'),
    qc = gr.addQuery('category', 'Hardware');
qc.addCondition('category', 'Network');
gr.addQuery('number', 'INC000003');
gr.next();
gr.number;

gs.info(gr.getEncodedQuery());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideQueryConditionAddCondition_String_name_String_oper_Object_value)