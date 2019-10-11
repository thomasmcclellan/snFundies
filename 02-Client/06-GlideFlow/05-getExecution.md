##### 10/08/2019
# `getExecution(executionId)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| executionId | `string` | The ID of the execution to be retrieved. |

## Return value:
| Type | Description |
|---|---|
| `object` | A promise of an execution `object`. |

---

## Description:
Get an existing execution instance by ID.

---

In this example, the code gets an execution, then waits for it to be completed before logging the executions completion status and outputs using `console.log`.
```js
// Get an existing action and await completion
(function() {
  GlideFlow.getExecution('79cd437e0b202300a150a95e93673ae3')
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
    console.log(error);
  }
})();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideFlow-getExecution)