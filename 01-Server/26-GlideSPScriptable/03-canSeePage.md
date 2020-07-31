##### 7/30/2020
# `canSeePage(pageID)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| pageID | `string` | Page ID from the Pages [`sp_page`] table. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the currently logged in user has permissions to view the specified page.  Values include `true` (the user can view the page); `false` (either the user cannot view the page, the given `pageID` is not valid, or the user is not logged in). |

---

## Description:
Returns `true` if the currently logged in user has permission to view the specified page.

The system determines permission using roles and user criteria.

---

```js
GlideSPScritable.canSeePage('kb_view2');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#GSPS-canSeePage_S)