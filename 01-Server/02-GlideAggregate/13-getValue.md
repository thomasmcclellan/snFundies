##### 7/18/2019
# `getValue(name)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | String | The name of the field |

## Return value:
| Type | Description |
|---|---|
| String | The value of the field |

---

## Description:
Gets the value of a field.

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
}
gs.info('Current category is: ' + count.getValue('category'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGetValue_String)