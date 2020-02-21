##### 2/03/2020
# `showHideList(showFlag)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| showFlag | `boolean` | If `true`, displays the list. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Displays or hides the list and saves the current collapsed/expanded state of the list as a user preference.

---

```js
GlideList2.toggleAll = function(expandFlag) {
  for (var id in GlideList2) {
    var list = GlideList2[id];
    list.showHideList(expandFlag);
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-showHideList_B)