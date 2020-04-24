##### 4/02/2020
# `isActionAborted()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the current database action is to be aborted. |

---

## Description:
Checks to see if the current database action is to be aborted.

`isActionAborted()` is initialized (set to `false`) for new threads adn by the `next()` method.

---

```js
new gr = new GlideRecord('incident');

gs.info(gr.isActionAborted()); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordIsActionAborted)