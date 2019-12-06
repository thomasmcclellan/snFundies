##### 12/05/2019
# `getAttribute(attributeName)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| attributeName | `string` | Attribute name. |

## Return value:
| Type | Description |
|---|---|
| `string` | Attribute value. |

---

## Description:
Returns the value of the specified attribute from the dictionary.

If the attribute is a `boolean` attribute, use `getBooleanAttribute()` to get the value as a `boolean` rather than as a `string`.

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

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-getAttribute_String)