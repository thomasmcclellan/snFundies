##### 10/04/2019
# `execution.getExecutionStatus()`

## Return value:
| Type | Description |
|---|---|
| `string` | A `string` containing the execution status. |

---

## Description:
Returns a `string` containing the execution status of the current execution.

---

In this example, the code obtains an execution `object` using the `getExecution` method.  The `getExecution` method requires an ID, which is returned by the method used to start the execution.  The code then uses `getExecutionStatus()` to determine whether the execution has been completed before continuing.

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

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=execution-getExecutionStatus)