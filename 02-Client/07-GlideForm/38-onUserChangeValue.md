##### 12/12/2019
# `onUserChangeValue(func)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| func | `function` | `Function` to call when a user changes the value of a field within the current form.  This is actually the `function` code, not just the `function` name. * |

  > *This `function` must accept the following three arguments:
  >   * Field name
  >   * Original field value
  >   * Updated field value

## Return value:
| Type | Description |
|---|---|
| `function` | `Function` to call to unregister the `onUserChangeValue` event listener. |

---

## Description:
Registers a custom event listener that detects when any field in the current form is modified by a user.

When a form field is modified, the event listener calls the `function` that is passed in when the listener is initially registered.  This listener is only triggered when a user makes a change to a field on the form.  

  > **NOTE**: Changes from client scripts, UI policies, or any other non-user interactions, do not trigger the listener.

---

```js
var handler = function(fieldName, originalValue, newValue) {
  console.log('The field (' + fieldName + ') has a new value of: ' + newValue); //function code
};

var unregister = g_form.onUserChangeValue(handler);

// To unregister the event listener
unregister();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GF-onUserChangeValue_F)