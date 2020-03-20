##### 3/13/2020
# `getED()`
## Return value:
| Type | Description |
|---|---|
| `GlideElementDescriptor` | Element's descriptor. |

---

## Description:
Returns the element's descriptor.

---

```js
var totalCritical = 0,
    filledCritical = 0,
    fields = current.getFields();

gs.print(fields);

for (var num = 0; num < fields.size(); num++) {
  gs.print('Running array value ' + num);

  var ed = fields.get(num).getED();

  if (ed.hasAttribute('tiaa_critical')) {
    gs.print('Critical field found');

    totalCritical++;

    if (!fields.get(num).isNil()) filledCritical++;
  }
}

var answer = 0;

gs.print('Total - ' + totalCritical);
gs.print('Filled - ' + filledCritical);

if (filledCritical > 0 && totalCritical > 0) {
  var pcnt = (filledCritical / totalCritical) * 100;

  answer = pcnt.toFixed(2);
}

answer;
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/SGR-getED)