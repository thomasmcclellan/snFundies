##### 2/05/2020
# `sortDescending(field, amount?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| field | `string` | Specifies the field used to sort the list. |
| amount (**Optional**) | `number` | The number in the list to be sorted. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sorts the list in descending order and saves the choice.

---

```js
$timeout(function() {
  if (GlideList.lists) {
    var list = GlideList.get(name);

    if (list) {
      if (sortBy) {
        if (sortDirection === 'ASC') list.sort(sortBy);
        else list.sortDescending(sortBy);
      }

      list.refresh();
    }
  }
})
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-sortDescending_S_N)