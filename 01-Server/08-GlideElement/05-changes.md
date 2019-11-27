##### 11/27/2019
# `changes()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the fields have been changed, `false` if the field has not. |

---

## Description:
Determines if the current field has been modified.  This functionality is available for all available data types, except, `Journal` fields.

  > **NOTE**: the `changes()` methods is not supported within ACL scripts.

  > **NOTE**: If the `GlideRecord` on which you are performing this method has only been initialized and read, adn has not been written, the underlying before-and-after values are the same.  In this case, the method returns `false`, as there has been no change to the data store.

---

```js
// This method is often used in business rules.  The following example shows is from a business rule, if 'assigned_to' field value is changed, create an event in the EventQueue
if (!current.assigned_to.nil() && current.assigned_to.changes())
  gs.eventQueue(
    'incident.assigned', 
    current, 
    current.assigned_to.getDisplayValue(), 
    previous.assigned_to.getDisplayValue()
  );
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementChanges)