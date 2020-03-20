##### 3/05/2020
# `deleteMultiple()`
## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Deletes multiple records that satisfy the query condition.

  > This method does not delete attachments.

Do not use `deleteMultiple()` on tables with currency fields.  Always delete each record individually.  Also, do not use this method with the `chooseWindow()` or `setLimit()` methods when working with large tables.

---

```js
var gr = new GlideRecord('incident');
gr.addQuery('active', 'false') // To delete all inactive incidents
gr.query();
gr.deleteMultiple();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordDeleteMultiple)