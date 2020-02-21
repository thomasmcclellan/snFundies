##### 2/04/2020
# `checkRecord(gr, filter, match?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gr | `GlideRecord` | `GlideRecord` to evaluate. |
| filter | `string` | Encoded query `string` (case-sensitive). |
| match (**Optional**) | `boolean` | Flag that indicates whether all conditions must be met if the `filter` parameter contains multiple conditions. * |

  > *Valid values:
  >   * `true`: all conditions must be met for the method to return `true`
  >   * `false`: only one of the conditions must be met for the method to return `true`
  >
  > Default is `true`.

## Return value:
| Type | Description |
|---|---|
| `boolean` | Results of the filter comparison.  `true` if the filter conditions are met; otherwise, `false`. |

---

## Description:
Compares a specified filter to the contents of a specified `GlideRecord`.

If the specified filter contains one condition, the method returns `true`; if the record meets the condition of the filter.

If the specified filter contains more than one condition, for example, `'active=true^number=abc^category=request'`, you can use the `match` parameter to define whether all conditions must be met to determine a match or just a single condition.

---

```js
var rec = new GlideRecord('incident'),
    bool = true;
rec.query();

while (rec.next()) {
  bool = GlideFilter.checkRecord(rec, 'active=true');

  gs.info('number ' + rec.number + ' is ' + bool);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideFilterCheckRecord_GlideRecord_String_Object)