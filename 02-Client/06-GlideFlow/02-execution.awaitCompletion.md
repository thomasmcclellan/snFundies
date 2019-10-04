##### 10/03/2019
# `execution.awaitCompletion()`

## Return value:
| Type | Description |
|---|---|
| `object` | An `object` that contains completion details for a flow or action execution. |

---

## Description:
Returns a completion `object` for the execution.

---

In this example, an action is executed using `startAction()`, which returns an execution `object`.  The code then uses `awaitCompletion()` on this execution `object`, which return a completion `object`.  The code uses this completion `object` to log the status and outputs within the execution.

```js
(function() {
    var inputs = {};

    inputs['input1'] = 'string input'; // String

    GlideFlow.startAction('global.action_name', inputs)
        .then(function(execution) {
            return execution.awaitCompletion();
        }, errorResolver())
        .then(function(completion) {
            var status = completion.status;
            var outputs = completion.outputs;

            console.log(status);

            // Available Outputs:
            console.log(outputs);
        }, errorResolver());

    function errorResolver(error) {
        // Handle errors in error resolver
        console.error(error);
    }
})();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=execution-awaitCompletion)