##### 1/09/2020
# `getPlural()`
## Return value:
| Type | Description |
|---|---|
| `string` | The element's plural label. |

---

## Description:
Returns the element's plural label.

---

```js
var gr = new GlideRecord('incident');
gr.query();

var ed = gr.getED();

gs.info(ed.getPlural()); // Incidents
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGED-getPlural)