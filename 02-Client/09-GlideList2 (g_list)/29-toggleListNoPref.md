##### 2/05/2020
# `toggleListNoPref()`
## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Toggles the display of the list but does not save the current collapsed/expanded state of the list as a user preference.

---

```js
var list = GlideList2.get(listId);

if (!list) return;

list.toggleListNoPref();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-toggleListNoPref)