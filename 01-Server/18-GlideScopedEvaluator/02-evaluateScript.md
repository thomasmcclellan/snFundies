##### 5/15/2020
# `evaluateScript(grObj, scriptField?, variables?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| grObj | `GlideRecord` | The `GlideRecord` containing a script expression. |
| scriptField (**Optional**) | `string` | The name of the field containing the script expression. |
| variables (**Optional**) | `object` | A map of variables with name-value pairs. These variables are available to the script during execution of this method. |

## Return value:
| Type | Description |
|---|---|
| `object` | The result of the script execution. |

---

## Description:
Evaluates a script from a `GlideRecord` field.

---

```js
// For this example, we created a table:  "x_app_table" with two columns: "short_description", "test_script", "test_script" will store the script to be evaluated by GlideScopedEvaluator.
var gr = new GlideRecord('x_app_table'),
    vars,
    evaluator;
gr.short_description = 'Testing GlideScopedEvaluator';
gr.test_script = "gs.getUser().getName() + ' says ' + greeting; ";
gr.insert();

// Setup variables to be used by the script
vars = { 'greeting': 'hello' };

// Evaluate the script from the field
gr.addQuery('short_description', 'Testing GlideScopedEvaluator');
gr.query();

if (gr.next()) gr.info(evaluator.evaluateScript(gr, 'test_script', vars));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideEvaluatorScopedAPI#r_ScopedGlideEvaluatorEvaluateScript_GlideRecord_String_Object)