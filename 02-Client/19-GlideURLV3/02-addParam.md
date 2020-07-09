##### 6/25/2020
# `addParam(name, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Name of the query `string` parameter. |
| value | `string` | Query `string` value. |

## Return value:
| Type | Description |
|---|---|
| `string` | The `GlideURL`. |

---

## Description:
Adds a query `string` name-value pair to the URL.

---

```js
var gu =  new GlideURL('incident.do'),
    url = gu.addParam('sys_id', '-1');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideURLV3API#r_GURL-addParam_S_S)