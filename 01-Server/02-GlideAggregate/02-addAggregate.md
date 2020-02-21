##### 7/08/2019
# `addAggregate(agg, name?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| agg | `string` | Name of teh aggregate to add, for example, **COUNT**, **MIN**, or **MAX** |
| name | `string` | (Optional) Name of the column to aggregate. The default is `null` |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value |

---

## Description:
Adds an aggregate.

---

```js
var count = new GlideAggregate('incident');
var incidents = 0;

count.addAggregate('COUNT');
count.query();

if (count.next()) 
  incidents = count.getAggregate('COUNT');

// Number of incidents varies depending on the current state of the incident table
gs.info('Number of incidents: ' + incidents);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateAddAggregate_String_String)