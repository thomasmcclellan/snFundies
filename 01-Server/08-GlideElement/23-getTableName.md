##### 12/27/2019
# `getTableName()`

## Return value:
| Type | Description |
|---|---|
| `string` | Name of the table.  The returned value may be difference from the table `class` that the record is in.  See **Tables** and **Classes** in the product documentation. |

---

## Description:
Returns the name of the table on which the field resides.

---

```js
if (current.approver.getTableName() === 'sysapproval_approver') {
  if (current.approver === email.from_sys_id) {
    current.comments = 'reply from: ' + email.from  + '\n\n' + email.body_text;

    // If it has been cancelled, it's cancelled
    var doIt = true;

    if (current.state === 'cancelled')
      doIt = false;

    if (email.body.state !== undefined)
      current.state = email.body.state;

    if (doIt)
      current.update();
  } else {
    gs.log(
      'Approval for task (' +
      current.sysapproval.getDisplayValue() +
      ') rejected because user sending email(' + 
      email.from + 
      ') does not match the approver (' + 
      current.approver.getDisplayValue() + 
      ')'
    );
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-getTableName)