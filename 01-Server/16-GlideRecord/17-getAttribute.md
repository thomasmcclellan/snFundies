##### 3/10/2020
# `getAttribute(fieldName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Field name for which to return the dictionary attributes. |

## Return value:
| Type | Description |
|---|---|
| `string` | Dictionary attributes. |

---

## Description:
Returns the dictionary attributes for the specified field.

---

```js
doit();

function doit() {
  var gr = new GlideRecord('sys_user');
  gr.query('user_name', 'admin');

  if (gr.next()) {
    gs.print('we got one');
    gs.print(gr.location.getAttribute('tree_picker'));
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGR-getAttribute_S)