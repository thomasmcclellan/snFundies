##### 3/09/2020
# `get(name?, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name (**Optional**) | `object` | Name of the instantiated `GlideRecord` column to search for the specified `value` parameter.  If only a single parameter is passed in, the method assumes that this parameter is `sys_id`. |
| value | `object` | Value to match. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Indicates whether the requested record was located. * |

  > *Valid values:
  >   * `true`: record was found
  >   * `false`: record was not found

---

## Description:
Returns the specified record in an instantiated `GlideRecord` object.

This method accepts either one or two parameters.  If only a single parameter is passed in, the method assumes it is the `sys_id` of the desired record.  If two parameters are passed in, the first is the name of the column within the instantiated `GlideRecord` to search.  The second is the value to search for.

If multiple records are found, use `next()` to access the additional records.

---

```js
var grIncident = new GlideRecord('incident'),
    returnValue = grIncident.get('99ebb4156fa831005be8883e6b3ee4b9');

gs.info(returnValue); // logs true or false
gs.info(grIncident.number); // logs Incident number
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordGet_Object_Object)