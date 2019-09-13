##### 7/18/2019
# `query()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value |

---

## Description:
Issus the query and gets the results.

---

```js
var count = new GlideAggregate('incident');
var incidents = 0;

count.addAggregate('COUNT');
count.query();

if (count.next()) {
   incidents = count.getAggregate('COUNT');
}

gs.info('Number of incidents: ' + incidents);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateQuery)