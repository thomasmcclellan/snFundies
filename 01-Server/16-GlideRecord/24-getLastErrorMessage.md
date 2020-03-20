##### 3/19/2020
# `getLastErrorMessage()`
## Return value:
| Type | Description |
|---|---|
| `string` | The last error message as a `string`. |

---

## Description:
Retrieves the last error message.  If there is no last error message, `null` is returned.

---

```js
// Setup a data policy where short_description field in incident is mandatory
var gr = new GlideRecord('incident'),
    errorMessage;
gr.insert();
errorMessage = gr.getLastErrorMessage();

gs.info(errorMessage);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetLastErrorMessage)