##### 6/10/2020
# `isURLWhiteListed(url)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| url | `string` | the URL to be checked against the URL white list. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` if the specified URL is in the white list. |

---

## Description:
Checks the specified URL against the system defined white list.

---

```js
var myURL="http://evil.com/badscript.do",
    isWhitelisted=GlideSecurityUtils.isURLWhiteListed(myURL);

gs.info(isWhitelisted); // false
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/GlideSecurityUtilsScopedAPI#GSU-isURLWhiteListed_S)