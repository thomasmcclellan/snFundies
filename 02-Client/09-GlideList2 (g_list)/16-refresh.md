##### 1/09/2020
# `refresh(firstRow?, additionalParams?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| firstRow (**Optional**) | `number` | The first row to appear in the list.  If not specified, the first row of the current is used. |
| additionalParams (**Optional**) | `string` | Name-value pairs that are submitted with the list refresh request. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Refreshes the list.  The `orderBy` part of the list filter is ignored so that the list uses its natural ordering when it is refreshed.

---

```js
$timeout(function() {
  if (GlideList.lists) {
    var list = GlideList.get(name);

    if (list) {
      if (sortBy) {
        if (sortDirection === 'ASC') {
          list.sort(sortBy);
        } else {
          list.sortDescending(sortBy);
        }

        list.refresh();
      } 
    }
  }
})
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-refresh_N_S)