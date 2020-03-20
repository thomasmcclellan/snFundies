##### 3/16/2020
# `getElement(columnName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| columnName | `string` | Name of the column to get the element from. |

## Return value:
| Type | Description |
|---|---|
| `GlideElement` | The `GlideElement` for the specified column of the current record. |

---

## Description:
Retrieves the `GlideElement` object for the specified field.

---

```js
var elementName = 'short_description',
    gr = new GlideRecord('incident');
gr.initialize();
gr.setValue(elementName, 'My DB is not working');
gr.insert();

gs.info(gr.getElement('short_description'));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetElement_String)