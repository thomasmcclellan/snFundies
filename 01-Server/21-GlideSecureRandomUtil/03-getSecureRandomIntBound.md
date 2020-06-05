##### 6/01/2020
# `getSecureRandomIntBound(bound)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| bound | `number` | The bound value. |

## Return value:
| Type | Description |
|---|---|
| `number` | the pseudo-randomly generated integer. |

---

## Description:
Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value that you pash into the method.

---

```js
gs.info(GlideSecureRandomUtil.getSecureRandomIntBound(100));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSecurityUtilsScopedAPIs#r_GlideSecureRandomUtilgetSecureRandomIntBound)