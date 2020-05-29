##### 5/29/2020
# `orderBy(column)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| column | `string` | The column name to be used to order the result set. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Specifies an `orderBy` column.  May be called more than once to order by multiple columns.

---

```js
function UpdateProjectWBS(project) {
  var count = 0,
      child = new GlideRecord('pm_project_task');
  
  child.addQuery('parent', project.sys_id);
  child.orderBy('order');
  child.orderBy('number');
  child.query(childResponse);

  g_form.addInfoMessage(count + ' Project Tasks updated');
}

function childResponse(child) {
  var len = child.getRowCount().toString().length,
      seq = 0;

  while (child.next()) {
    count += UpdateProjectTaskWBS(child, 1, ++seq, len, '');
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-orderBy_S)