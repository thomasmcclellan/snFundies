##### 11/01/2019
# `getActionName()`

## Return value:
| Type | Description |
|---|---|
| `string` | The current action name. |

---

## Description:
Returns the most recent action name, or, for a client script, the `sys_id` of the UI action clicked.

  > **NOTE**: Not available in Wizard client scripts.

---

```js
function onSubmit() {
  var action = g_form.getActionName();

  alert('You pressed ' + action);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetActionName)