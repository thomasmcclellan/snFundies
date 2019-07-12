##### 7/11/2019
# `addNullQuery(fieldName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | String | The name of the field |

## Return value:
| Type | Description |
|---|---|
| GlideQueryCondition | The scoped query condition |

---

## Description:
Adds a null query to the aggregate.

---

```js
var count = new GlideAggregate('incident');

count.addNullQuery('short_description');
count.query(); // iss the query to the db to get all records

while (count.next()) {
  // add code here to process the aggregate
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateAddNullQuery_String)