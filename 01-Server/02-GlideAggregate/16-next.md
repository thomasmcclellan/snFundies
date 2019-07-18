##### 7/18/2019
# `next()`

## Return value:
| Type | Description |
|---|---|
| Boolean | `true` if there are more records in the query set; otherwise, `false`. |

---

## Description:
Moves to the next record in the `GlideAggregate`.

---

```js
var count = new GlideAggregate('incident');
var incidents = 0;

count.addAggregate('COUNT');
count.query();

if (count.next()) {
  incidents = count.getAggregate('COUNT');
  
  gs.info(incidents);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateNext)