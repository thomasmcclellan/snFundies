##### 1/13/2020
# `setFilterAndRefresh(filter)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| filter | `string` | Encoded query `string`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the encoded query `string` for the list, including the `orderBy` and `groupBy` if specified, and then refreshes the list using the new filter.

---

```js
function updateListFitler(projectID) {
  var list = GlideList2.getByName('backlog_stories');
  var fixedQuery = $('hdn_additional_filters').value;

  if (!projectID) {
    list.setFilterAndRefresh(fixedQuery + '^ORDERBYteam_index');
    list.setOrderBy('team_index');
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-setFilterAndRefresh_S)