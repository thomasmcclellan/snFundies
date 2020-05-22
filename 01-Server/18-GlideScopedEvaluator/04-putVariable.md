##### 5/19/2020
# `putVariable(name, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | The name of the variable. |
| value | `object` | The value of the variable. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Puts a variable into the `GlideScopedEvaluator` object.  These variables are available to the script that this `GlideScopedEvaluator` object runs.

---

```js
// Setting up a record that contains the script to be executed.
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
    gs.info(evaluator.getVariable('result')); // 300
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideEvaluatorScopedAPI#r_ScopedGlideEvaluatorPutVariable_String_Object)