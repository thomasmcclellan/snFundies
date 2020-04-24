##### 3/31/2020
# `initialize()`
## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Creates an empty record suitable for population before an insert.

---

```js
var grInc = new GlideRecord('incident');
grInc.initialize();
grInc.short_description = 'New Incident';
grInc.description = 'Incident description';
grInc.insert();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordInitialize)