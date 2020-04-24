##### 4/09/2020
# `GlideModalFormV3(title, tableName, onCompletionCallback, readOnly?)`
## Overview:
Displays a form in a `GlideModal`.

General usage of the `GlideModalForm` class involves creating the `object`, setting any preference, and then rendering the `GlideModalForm`.

Specify the query parameters that are passed to the form using `setPreference()`.  any name/value pair that you specify with `setPreference()` is sent along with the form `POST` request to display the form.

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| title | `string` | The form title. |
| tableName | `string` | The table being shown. |
| onCompletionCallback | `function` | The `function` to call after the form has been submitted and processed on the server.  The callback `function` has the form `callbackFunction(action_verb, sys_id, table, displayValue)`.  * |
| readOnly (**Optional**) | `boolean` | `true` sets form to read only; otherwise, `false`. |

  > *The parameters are as follows:
  >   * `action_verb` is the name of the UI action executed.  Examples are `sysverb_insert` (Submit button), `sysverb_cancel`, `sysverb_save` (Save button).
  >   * `sys_id` is the `sys_id` of the affected record.
  >   * `table` is the name of the table containing the record.
  >   * `displayValue`.

---

## Description:
Creates an instance of the `GlideModalForm` class.

---

```js
var d = new GlideModalForm(
              'dialog title', 
              'table_name_or_form_name', 
              [callback on completion of submit]
            );
d.setPreference('name', 'value');
d.render();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideModalFormV3API)