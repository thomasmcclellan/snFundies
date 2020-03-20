##### 3/18/2020
# `getLabel()`
## Return value:
| Type | Description |
|---|---|
| `string` | Field's label. |

---

## Description:
Returns the field's label.

---

```js
template.print('Summary of Requested items:\n');

var gr = new GlideRecord('sc_req_item');
gr.addQuery('request', current.sysapproval);
gr.query();

while (gr.next()) {
  var nicePrice = gr.price.toString();

  if (nicePrice != '') {
    nicePrice = parseFloat(nicePrice);
    nicePrice = nicePrice.toFixed(2);
  }

  template.print(gr.number + ': ' + gr.quantity + ' X ' + gr.cat_item.getDisplayValue() + ' at $' + nicePrice + ' each \n');
  template.print('  Options:\n');

  for (key in gr.variables) {
    bar v = gr.variables[key];

    if (v.getGlideObject().getQuestion().getLabel() != '') {
      template.space(4);
      template.print('    ' + v.getGlideObject().getQuestion().getLabel() + ' = ' + v.getDisplayValue() + '\n');
    }
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/SGR-getLabel)