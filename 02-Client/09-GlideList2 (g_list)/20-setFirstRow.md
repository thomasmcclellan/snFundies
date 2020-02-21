##### 1/16/2020
# `setFirstRow(rowNum)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| rowNum | `number` | Row number of the first row to display. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the first row that appears in the list when the list is refreshed.

---

```js
var nextRow = 0,
    rowsPerPage = 20,
    list = GlideList2.get(listId);

if (!list)
  return;

list.setFirstRow(nextRow);
nextRow += rowsPerPage;
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-setFirstRow_N)