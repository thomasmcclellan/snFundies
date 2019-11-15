##### 11/15/2019
# `setValue(obj)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| obj | `object` | The duration in the `object`'s internal format, which is the date and time from January 1, 1970, 00:00:00 UTC. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the internal value fo the `GlideDuration` `object`.

`GlideDuration` `objects` store the duration as a date and time from January 1, 1970, 00:00:00 UTC.

---

```js
var dur = new GlideDuration();
dur.setValue('1970-01-05 08:00:00'); // sets internal DateTime value.  The string will be parsed into a GlideDuration object

gs.info(dur.getDisplayValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideDurationSetValue_Object)