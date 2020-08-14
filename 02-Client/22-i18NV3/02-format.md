##### 8/07/2020
# `format(message, map)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| message | `string` | The message to have the tokens added. |
| map | `object` | The map of the name/value pairs to replace in the message. |

## Return value:
| Type | Description |
|---|---|
| `string` | The formatted `string`. |

---

## Description:
Formats a `string` containing named tokens with values from a map.

---

```js
// Returns: "The rich young ruler was very very rich"
nowapi.g_i18n.format("The {p1} {p2} {p3} was very very {p1}",{p1: "rich", p2: "young", p3: "ruler"});
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_i18NV3API#r_i18NV3-format-S_O)