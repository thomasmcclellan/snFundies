##### 7/09/2019
# `addEncodedQuery(query)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| query | String | An encoded query to add to the aggregate |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value |

---

## Description:
Adds an encoded query to the other queries that may have been set for this aggregate.

---

```js
// Number of incidents varies depending on the current state of the incident table
var count = new GlideAggregate('incident');
var incidents = 0;

count.addEncodedQuery('active=true');
count.addAggregate('COUNT');
count.query();

if (count.next())
  incidents = count.getAggregate('COUNT');

gs.info(incidents);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateAddEncodedQuery_String)