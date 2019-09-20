##### 9/16/2019
# `setGlideDateTime(gdt)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gdt | `GlideDateTime` | The object to use for setting the datetime value. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
SEts the dae and time to the current object using an exiting `GlideDateTime` object.  This method is equivalent to instantiating a new object with a `GlideDateTime` parameter.

---

```js
var dt1 = new GlideDatTime('2019-09-16 09:00:00');
var dt2 = new GlideDatTime('2020-10-17 10:01:01');

dt1.setGlideDateTime(dt2);

gs.info(dt1.getValue());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideDateTime_GlideDateTime_g)