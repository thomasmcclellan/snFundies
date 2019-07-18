##### 7/18/2019
# `goupBy(name)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | String | Name of the field |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value |

---

## Description:
Provides the name of a field to use in grouping the aggregates.  

  > **NOTE**: May be called numerous times to set multipe group fields.

---

```js
var count = new GlideAggregate('incident');

count.addAggregate('MIN', 'sys_mod_count');
count.addAggregate('MAX', 'sys_mod_count');
count.addAggregate('AVG', 'sys_mod_count');
count.groupBy('category');
count.query();  

while (count.next()) {  
  var min = count.getAggregate('MIN', 'sys_mod_count'),
      max = count.getAggregate('MAX', 'sys_mod_count'),
      avg = count.getAggregate('AVG', 'sys_mod_count'),
      category = count.category.getDisplayValue();
      
  gs.info(category + " Update counts: MIN = " + min + " MAX = " + max + " AVG = " + avg);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGroupBy_String)