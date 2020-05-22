##### 5/18/2020
# `getVariable(name)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of the variable. |

## Return value:
| Type | Description |
|---|---|
| `object` | The value of the specified variable. |

---

## Description:
Returns a variable from a `GlideScopedEvaluator` object.

---

```js
//setting up a record that contains the script to be executed.
gr = new GlideRecord('x_app_table'); 
gr.short_description = 'Calculate Addition';  
gr.calculate = "result = x + y"; 
gr.insert(); 
 
var evaluator = new GlideScopedEvaluator();
evaluator.putVariable('x', 100);
evaluator.putVariable('y', 200);
evaluator.putVariable('result', null);
 
// Now retrieve the result 
gr = new GlideRecord('x_app_table'); 
gr.addQuery('short_description','Calculate Addition'); 
gr.query(); 
if (gr.next()) { 
    evaluator.evaluateScript(gr, 'calculate', null);
    gs.info(evaluator.getVariable('result'));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideEvaluatorScopedAPI#r_ScopedGlideEvaluatorGetVariable_String)