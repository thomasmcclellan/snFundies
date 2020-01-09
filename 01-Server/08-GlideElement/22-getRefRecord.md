##### 12/26/2019
# `getRefRecord()`

## Return value:
| Type | Description |
|---|---|
| `GlideRecord` | A `GlideRecord` `object`. |

---

## Description:
Returns a `GlideRecord` `object` for a given reference element.

  > **WARNING**: If the reference element does not contain a value, it returns an empty `GlideRecord` `object`, not a `null` `object`.

---

```js
var grInc = new GlideRecord('incident');
grInc.addNotNullQuery('caller_id');
grInc.query();

if (grInc.next()) {
  var grUser = grInc.caller_id.getRefRecord();
  if (grUser.isValidRecord()) 
    gs.print(grUser.getValue('name'));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementGetRefRecord)