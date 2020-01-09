##### 12/31/2019
# `setError(errorMessage)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| errorMessage | `string` | The error message. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds an error message.  Available in `Fuji` patch 3.

---

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();
glideRecord.short_description.setError('Error text');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementSetError_String)