##### 2/11/2020
# `isActive(pluginID)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| pluginID | `string` | The plugin ID. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the plugin has been activated; otherwise, `false`. |

---

## Description:
Determines if the specified plugin has been activated.

---

```js
var gr = new GlideRecord('sys_plugin'),
    queryString = 'active=0^ORactive=1',
    pMgr = new GlidePluginManager();
gr.addEncodedQuery(queryString);
gr.query();

while (gr.next()) {
  var name = gr.getValue('name'),
      pID = gr.getValue('source');
  isActive = pMgr.isActive(pID);

  if (isActive) gs.info('The plugin ' + name + ' is active.');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlidePluginManager-isActive_String)