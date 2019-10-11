##### 10/07/2019
# `execution.getOutputs()`

## Return value:
| Type | Description |
|---|---|
| `object` | An `object` containing outputs for an action, flow, or subflow. |

---

## Description:
Returns an outputs `object` for the execution.

Use this method to access outputs generated by he execution of an action, flow, or subflow.

---

In this example, the code obtains an execution `object` using the `getExecution` method.  After the execution is complete, the code uses `getOutputs()` to return an outputs `object`, which it then logs using the `console.log` method.
```js
// Get an existing action, getStatus, and getOutputs if complete
(function() {
  GlideFlow.getExecution('mamIN4Q35vmEFe744EwJV5GHrSz8fmJG')
    .then(function(execution) {
      execution.getExecutionStatus()
        .then(function(status) {
          if (status === 'COMPLETE')
            execution.getOutputs()
              .then(function(outputs) {
                console.log(outputs);
              }, errorResolver);
        }, errorResolver);
    }, errorResolver);

  function errorResolver(error) {
    // Handle errors in error resolver
    console.error(error);
  }
})();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=execution-getOutputs)