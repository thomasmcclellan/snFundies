##### 12/09/2019
# `idLiveUpdating()`

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if a live update is happening on the record displayed by the form; otherwise, `false`. |

---

## Description:
Returns `true` while a live update is being done on the record the form is showing.

This can be used in an `onChange()` client script to determine if a change to the record is because of a live update from another session.  The client script can then decide what action to take, or not to take.  This applies to systems using `UI16` with live forms enabled.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GF-isLiveUpdating)