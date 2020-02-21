##### 2/05/2020
# `toggleList()`
## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Toggles the display of the list and saves the current collapsed/expanded state of the list as a user preference.

---

```js
var list = GlideList2.get(listId);

if (!list) return;

list.toggleList();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-toggleList)