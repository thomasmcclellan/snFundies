##### 7/18/2019
# `setGroup(bool)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| bool | `boolean` | When `true`, the results are grouped; otherwise, `false` |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value |

---

## Description:
Sets whether the results are to be grouped.

---

```js
var ga = new GlideAggregate('incident');

ga.addAggregate('COUNT', 'category');
ga.setGroup(true);
ga.groupBy("category");
ga.query();
 
while(ga.next()) {
  gs.info('Category ' + ga.category + ' ' + ga.getAggregate('COUNT', 'category'));
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateSetGroup_Boolean)