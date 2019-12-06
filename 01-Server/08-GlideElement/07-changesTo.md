##### 12/03/2019
# `changesTo(obj)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| obj | `object` | An `object` value to check against the new value of the current field. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the previous value matches; otherwise, `false`. |

---

## Description:
Determines if the new value of a field, after a change, matches the specified `object`.

  > **NOTE**: The `changeTo()` method is not supported with ACL scripts.

  > **NOTE**: If the `GlideRecord` on which you are performing this method has only been initialized and read, and has not been written, the underlying before-and-after values are the same.  In this case, the method returns `false`, as there has been no change to the data store.

---

```js
// The following example shows that in a business rule, if 'active' field is changed to false, insert an event in the EventQueue
if (current.active.changeTo(false))
  gs.eventQueue('incident.inactive', current, current.incident_state, previous.incident_state);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementChangesTo_Object_o)