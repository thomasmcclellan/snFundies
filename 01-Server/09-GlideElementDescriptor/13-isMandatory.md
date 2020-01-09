##### 1/09/2020
# `isMandatory()`
## Return value:
| Type | Description |
|---|---|
| `boolean` | Flag that indicates whether the associated element is mandatory and must contain a value before the record containing the element can be saved.  Valid values are `true` (element must contain a value; mandatory field) and `false` (element does not have to contain a value) |

---

## Description:
Determines whether the element is mandatory and must contain a value before the record can be saved.

---

```js
var isRecordValid,
    gr = new GlideRecord('my_table'),
    field = gr.getElement('name'),
    elementDescriptor = field.getED();
gr.query();

while (gr.next()) {
  if (elementDescriptor.isMandatory() && !gr.name)
    isRecordValid = false;
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGED-isMandatory)