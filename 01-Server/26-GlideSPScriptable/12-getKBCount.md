##### 8/12/2020
# `getKBCount(sys_id)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| sys_d | `string` | `Sys_id` of the KB record. |

## Return value:
| Type | Description |
|---|---|
| `number` | Number of knowledge articles in the defined KB with:<br>A `workflow_state` of published<br>A `valid_to` date greater than or equal to the current date. |

---

## Description:
Returns the number of articles in the defined KB.

---

```js
//Server script 
(function() {
    data.count = $sp.getKBCount("a7e8a78bff0221009b20ffffffffff17");
})();

//HTML template
<div>
articles: {{::data.count}}
</div>
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#GSPS-getKBCount_S)