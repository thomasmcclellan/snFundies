##### 7/15/2019
# `getAggregate(agg, name)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| agg | `string` | The type of the aggregate, i.e. `SUM` or `COUNT` |
| name | `string` |  |

## Return value:
| Type | Description |
|---|---|
| `string` | The value of the aggregate |

---

## Description:
Get the value of an aggregate from the current record.

---

```js
var count = new GlideAggregate('incident');
var incidents = 0;

count.addAggregate('COUNT');
count.query();

if (count.next()) 
  incidents = count.getAggregate('COUNT');

// Number of incidents varies depending on the current state of the incident table
gs.info('Number of incidents: ' + incidents); // 63
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGetAggregate_String_String)