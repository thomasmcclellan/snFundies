##### 9/13/2019
# `getXML(callback)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| callback | `function` | The name of the callback function to process the results returned by the server. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
SEnds the server a request to execute the method and parameters associated with this `GlideAjax` object.

The server processes the request asynchronously and, when ready, returns the results via the function as the `callback_function`.

---

```js
var comments = gel('dialog_comments').value;
var ga = new GlideAjax('validateComments'); // Call script include to escape text

ga.addParam('sysparm_name', 'validateComments');
ga.addParam('sysparm_comments', comments);
ga.getXML(callback);

return false;

function callback(res) {
  var comments = res.responseXML.documentElement.getAttribute('answer');

  comments = trim(comments);

  if (comments == '') {
    // If comments are empty, alert the user and stop submission
    alert('Please enter your comments before submitting.');
  } else {
    // If there are comments, close the dialog window and submit them
    GlideDialogWindow.get().destroy(); // close the dialog window
    g_form.setValue('comments', comments); // set the 'Comments' field with comments in the dialog
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_GLAX-getXML_S)