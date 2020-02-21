##### 2/10/2020
# `getGroupingSeparator()`
## Return value:
| Type | Description |
|---|---|
| `string` | The grouping separator. |

---

## Description:
Returns the grouping separator.

---

```js
var locale = GlideLocale.get(),
    groupingSeparator = locale.getGroupingSeparator();

gs.info('The grouping separator is: ' + groupingSeparator); // The grouping separator is ,
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideLocaleGetGroupingSeparator)