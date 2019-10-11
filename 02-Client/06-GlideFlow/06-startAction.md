##### 10/09/2019
# `startAction(scopedName.actionName, inputs)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| scopedName | `string` | The scoped name of the flow to be executed. |
| inputs | `object` | An `object` containing inputs defined for the action. |

## Return value:
| Type | Description |
|---|---|
| `object` | An `object` containing details on the action execution. |

---

## Description:
Start an action.

---

In this example, the code starts the global `action_name` action using arguments in the `inputs` input object variable.  Upon completion, the example uses `console.log` or `console.error` to report on the success or failure of the flow.
```js
// Start an action and await completion
(function() {
  var inputs = {};

  inputs['input1'] = 'string input'; // String

  GlideFlow.startAction('global.action_name', inputs)
    .then(function(execution) {
      return execution.awaitCompletion();
    }, errorResolver)
    .then(function(completion) {
      var status = completion.status;
      var outputs = completion.outputs;

      console.log(status);
      console.log(outputs);
    }, errorResolver());

  function errorResolver(error) {
    // Handle errors in error resolver
    console.error(error);
  }
})();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideFlow-startAction)