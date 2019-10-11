##### 10/11/2019
# `startSubflow(scopedName.subflowName, inputs)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| scopedName | `string` | The scoped name of the flow to be executed. |
| inputs | `object` | An `object` containing inputs used for the subflow. |

## Return value:
| Type | Description |
|---|---|
| `object` | An `object` containing details on the subflow execution. |

---

## Description:
Start a subflow.

---

In this example, the code starts the global `subflow_name` subflow using arguments in the `inputs` array variable.  Upon completion, the example uses `console.log` or `console.error` to report on the success/failure of the flow.
```js
// Start an action and await completion
(function() {
  var inputs = {};

  inputs['input1'] = 'string input'; // String

  GlideFlow.startSubflow('global.subflow_name', inputs)
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
    // Handle error in error resolver
    console.error(error);
  }
})();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideFlow-startSubflow)