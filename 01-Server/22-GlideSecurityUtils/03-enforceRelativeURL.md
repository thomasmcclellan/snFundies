##### 6/08/2020
# `enforceRelativeURL(url)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| url | `string` | The URL to be turned into a relative URL. |

## Return value:
| Type | Description |
|---|---|
| `string` | A relative URL. |

---

## Description:
Removes the domain address from the URL, which leaves the page name and parameters.

---

```js
var myUrl = 'http://www.internet.com/test.do',
    relativeUrl = GlideSecurityUtils.enforceRelativeURL(myUrl);

gs.info(relativeUrl); // test.do
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/GlideSecurityUtilsScopedAPI#GSU-enforceRelativeURL_S)