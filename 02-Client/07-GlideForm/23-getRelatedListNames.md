##### 11/18/2019
# `getRelatedListNames()`

## Return value:
| Type | Description |
|---|---|
| `array` | `Array` of related lists from the current form in the order in which they appear on that form. |

---

## Description:
Returns an `array` of related lists from the current form in the order in which they appear on that form.

---

```js
var listNames = g_form.getRelatedListNames();

for (var name in listNames) {
  this.showRelatedList(listNames[name]);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GF-getRelatedListNames)