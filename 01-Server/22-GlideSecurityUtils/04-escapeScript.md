##### 6/09/2020
# `escapeScript(script)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| script | `string` | The script to have escape characters added. |

## Return value:
| Type | Description |
|---|---|
| `string` | The script with escape characters added. |

---

## Description:
Add escape characters to a script.

Adding escape characters to a script helps prevent cross-site scripting.

---

```js
var theScript = '<script>alert(1)</script>',
    escapedScript = GlideSecurityUtils.escapeScript(theScript);

gs.info(escapedScript); // <samp class="ph codeph">&amp;lt;script&amp;gt; alert(1)&amp;lt;/script&amp;gt;</samp>
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/GlideSecurityUtilsScopedAPI#GSU-escapeScript_S)