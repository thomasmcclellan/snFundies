##### 9/10/2019
# `fireAll(event, qualifier)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| event | `string` | The event to send.  Must be the `string` 'embedded_help:load_embedded_help'. |
| qualifier | `string` | The qualifier name created in the **Embedded Help** application |

## Return value:
| Type | Description |
|---|---|
| void | Method does not return a value. |

---

## Description:
Show the embedded-help content specified by the qualifier parameter in the right sidebar.

  > Before using the `fireAll()` method, you must have created the **Embedded Help** qualifier and help content.

---

```js
var qualifier = 'your-EH-qualifier';

CustomEvent.fireAll('embedded_help:load_embedded_help', qualifier);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=CSTE-fireAll_S_S)