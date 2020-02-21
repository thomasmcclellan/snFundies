##### 2/07/2020
# `getDecimalSeparator()`
## Return value:
| Type | Description |
|---|---|
| `string` | The decimal separator. |

---

## Description:
Returns the decimal separator.

---

```js
var locale = GlideLocale.get(),
    decimalSeparator = locale.getDecimalSeparator();

gs.info('The decimal separator is: ' + decimalSeparator);  // The grouping separator is .
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideLocaleGetDecimalSeparator)