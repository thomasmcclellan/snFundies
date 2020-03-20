##### 3/04/2020
# `chooseWindow(firstRow, lastRow, forceCount?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| firstRow | `number` | The first row to include.  Because the index starts at 0, a value of 0 returns the first row. |
| lastRow | `number` | The last row to include in the range.  Because the index starts at 0, use the value `n - 1`, in which `n` equals the actual row number. |
| forceCount (**Optional**) | `boolean` | If `true`, the `getRowCount()` method will return all possible records. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets a range of rows to be returned by subsequent queries.

---

```js
var gr = new GlideRecord('incident');
gr.orderBy('number');
gr.chooseWindow(2, 4);
gr.query();

if (gr.next()) gs.info(gr.number + ' is within window');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideRecordChooseWindow_Number_Number_Boolean)