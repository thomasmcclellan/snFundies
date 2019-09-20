##### 9/16/2019
# `getXMLAnswer(callback)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| callback | `function` | The callback function.  The `function` receives the answer element of the response in `XML` format as an argument. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Call the processor asynchronously and get the answer element of the response in `XML` format.

---

```js
function updateAttachmentCount(sysid) {
  var ga = new GlideAjax('AttachmentAjax');

  ga.addParam('sysparm_type', 'attachementCount');
  ga.addParam('sysparm_value', sysid);
  ga.getXMLAnswer(numberOfAttachments, null, sysid); // callback: numberOfAttachments
}

function numberOfAttachments(answer, sysid) {
  // We want to know there are 5 attachments, not 5.0 attachments
  var number = parseInt(answer);
  var buttons = $$('.attachmentNumber_' + sysid);

  if (buttons[0] == undefined)
    $('header_attachment_list_label').down().innerHTML = number;
  else
    for (var button in buttons) { buttons[button].innerHTML = number; }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_GLAX-getXMLAnswer_F)