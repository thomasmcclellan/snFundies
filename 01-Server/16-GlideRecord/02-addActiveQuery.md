##### 2/18/2020
# `addActiveQuery()`
## Return value:
| Type | Description |
|---|---|
| `QueryCondition` | Filter to return active records. |

---

## Description:
Adds a filter to return active records.

---

```js
var inc = new GlideRecord('incident');
inc.addActiveQuery();
inc.query();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGR-addActiveQuery)