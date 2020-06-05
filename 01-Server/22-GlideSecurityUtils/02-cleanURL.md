##### 6/05/2020
# `cleanURL(url)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| url | `string` | The URL to be checked. |

## Return value:
| Type | Description |
|---|---|
| `string` | The URL stripped of problem elements. |

---

## Description:
Removes suspicious encoding to prevent reflected or `DOM` based cross site scripting.

---

```js
var myUrl = 'javascript%3Aalert(1)',
    clean = GlideSecurityUtils.cleanURL(myUrl);

gs.info(clean); // null

```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/GlideSecurityUtilsScopedAPI#GSU-cleanURL_S)