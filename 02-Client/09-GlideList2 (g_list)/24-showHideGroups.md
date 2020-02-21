##### 1/22/2020
# `showHideGroups(showFlag)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| showFlag | `boolean` | If `true`, shows the groups within the list; otherwise, `false`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Shows/hides all the groups within the list and saves the current collapsed/expanded state of the groups as a user preference.

---

```js
function showHideAllGroups(showFlag) {
  var list = GlideList2.get(listId);

  if (!list) return;

  list.showHideGroups(showFlag);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-showHideGroups_B)