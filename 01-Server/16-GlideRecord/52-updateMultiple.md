##### 4/28/2020
# `updateMultiple()`
## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Updates each `GlideRecord` in a state query with a specified set of changes.

When changing field values, use `setValue()` instead of directly setting the field (`field = something`).  when using `updateMultiple()`, directly setting the field (`gr.state = 4`) results in all records in the tables being updated instead of just the records returned by the query.

Do not use this method ith the `chooseWindow()` or `setLimit()` methods when working the large tables.

This method sets new values and does not clear existing values.

---

```js
// Update the state of all active incidents to 4 - 'Awaiting User Info'
var gr = new GlideRecord('incident');
gr.addQuery('active', true);
gr.setValue('state', 4);
gr.updateMultiple();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordUpdateMultiple)