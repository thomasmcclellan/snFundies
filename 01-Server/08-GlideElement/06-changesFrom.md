##### 12/02/2019
# `changesFrom(obj)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| obj | `object` | An `object` value to check against the previous value of the current field. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the previous value matches; otherwise, `false`. |

---

## Description:
Determines if the previous value of the current field matches the specified `object`.

  > **NOTE**: If the `GlideRecord` on which you are performing this method has only been initialized and read, and has not been written, the underlying before-and-after values are the same.  In this case, the method returns `false`, as there has been no change to the data store.

---

```js
// The following example shows that in a business rule, if "active" field is changed from true, insert a event in the EventQueue.
if (current.active.changesFrom(true)) {
  gs.eventQueue('incident.inactive', current, current.incident_state, previous.incident_state);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementChangesFrom_Object_o)