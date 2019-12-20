##### 12/18/2019
# `getLabel()`

## Return value:
| Type | Description |
|---|---|
| `string` | `Object` label. |

---

## Description:
Returns the `object` label.

---

```js
var gr = new GlideRecord('sc_req_item');

gr.addQuery('request', current.sysapproval);
gr.query();

while(gr.next()) {
  var nicePrice = gr.price.toString();

  if (nicePrice != '') 
    nicePrice = parseFloat(nicePrice).toFixed(2);

  template.print(gr.number + ': ' + gr.quantity + ' X ' + gr.cat_item.getDisplayValue() + ' at $' + nicePrice + ' each \n');
  template.print('  Options:\n');

  var variables = gr.variables.getElements();

  for (var key in variables) {
    var v = variables[key];

    if (v.getQuestions().getLabel() != '') {
      template.space(4);
      template.print('    ' + v.getQuestions().getLabel() + ' = ' + v.getDisplayValue() + '\n');
    }
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-getLabel)