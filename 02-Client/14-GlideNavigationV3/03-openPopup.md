##### 5/05/2020
# `openPopup(url, name, features, noStack)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| url | `string` | The URL to open. |
| name | `string` | The window name. |
| features | `string` | A comma separated list of features for the popup window. |
| noStack | `boolean` | `true` to append `sysparm_stack=no` to the url.  This prevents weirdness when using the form back button. |

## Return value:
| Type | Description |
|---|---|
| `Window` | The instance of the new window. |

---

## Description:
Opens a popup window.

The features parameter is part of the `DOM` specification.  The features are used and passed through.  

  > See the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) for more information on the feature list.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideNavigationV3API#r_GNV3-openPopup_S_S_S_B)