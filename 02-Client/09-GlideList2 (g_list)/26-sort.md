##### 2/04/2020
# `sort(field)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| field | `string` | Specifies the field used to sort the field. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sorts the list in ascending order and saves the choice.

---

```js
$timeout(function() {
  if (GlideList.lists) {
    var list = GlideList.get(name);

    if (list) {
      if (sortBy) {
        if (sortDirection === 'ASC')
          list.sort(sortBy);
        else
          list.sortDescending(sortBy);
      }
      
      list.refresh();
    }
  }
})
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-sort_S)