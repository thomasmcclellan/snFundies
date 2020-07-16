##### 7/14/2020
# `getLanguage()`
## Return value:
| Type | Description |
|---|---|
| `string` | The session's language code. |

---

## Description:
Returns the session's language code.

---

```js
var session = gs.getSession(),
    language = session.getLanguage();

gs.info(language); // en
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSessionScopedAPI#r_ScopedGlideSessionGetLanguage)