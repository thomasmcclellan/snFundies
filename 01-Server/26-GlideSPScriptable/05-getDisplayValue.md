##### 8/03/2020
# `getDisplayValue(fieldName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |

## Return value:
| Type | Description |
|---|---|
| `string` | The display value from either the sp_instance or sp_portal record.
 |

---

## Description:
Returns the display value of the specified field (if it exists and has a value) from either the widget's `sp_instance `or the `sp_portal` record.

---

```js
//Server script
(function() {
    data.title = $sp.getDisplayValue("title");
    data.catalog = $sp.getDisplayValue("sc_catalog");
})();

//HTML template
<div>
    <h1>sp_instance.title: {{::data.title}}</h1>
    <h1>sp_portal.sc_catalog: {{::data.catalog}}</h1>
</div>
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#r_GSPS-getDisplayValue_S)