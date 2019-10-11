##### 10/10/2019
# `startFlow(scopedName.flowName, inputs)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| scopedName | `string` | The scoped name of the flow to be executed. |
| inputs | `object` | An `object` containing inputs defined for the flow. |

## Return value:
| Type | Description |
|---|---|
| `object` | An `object` containing details on the flow execution. |

---

## Description:
Start a flow.

---

This example flow is normally triggered when a record on the incident table is updated.  Because you are activating the flow from Client script, you must provide this information.  The code creates an `inputs` variable that contains the current record and the table for the record.
```js
// Start a Flow
(function() {
  var inputs = {};

  inputs['current'] = { // GlideRecord
    table: 'incident',
    sys_id: '79cd437e0b202300a150a95e93673ae3'
  };
  inputs['table_name'] = 'incident';

  GlideFlow.startFlow('global.flow_name', inputs)
    .then(
      function(execution) {
      console.log('Started flow_name with execution id: ' + execution.getExecutionId());
      },
      function(error) {
        console.log('Unable to start flow: ' + error);
      }
    );
})();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideFlow-startFlow)