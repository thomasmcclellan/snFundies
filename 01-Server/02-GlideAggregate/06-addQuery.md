##### 7/12/2019
# `addQuery(name, operator, value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | String | The query to add |
| operator | String | The operator for the query |
| value | String | The list of values to include in the query |

## Return value:
| Type | Description |
|---|---|
| GlideQueryCondition | The query condition |

---

## Description:
Adds a query to the aggregate.

---

```js
// Number of incidents varies depending on the current state of the incident table
var count = new GlideAggregate('incident');

count.addQuery('active', '=', 'true');
count.addAggregate('COUNT', 'category');
count.query();

while (count.next()) {
  var category = count.category;
  var categoryCount = count.getAggregate('COUNT', 'category');

  gs.info('There are currently ' + categoryCount + ' incidents with a category of ' + category);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateAddQuery_String_String_String)