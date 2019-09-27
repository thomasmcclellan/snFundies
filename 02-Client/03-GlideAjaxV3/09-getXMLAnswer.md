##### 9/23/2019
# `getXMLAnswer(callback)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| callback | `function` | The callback function.  The function receives the answer element of the response in `XML` format as an argument. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Call the processor asynchronously and get the answer element of the response in `XML` format.

---

```js
function autofillPhoneNumber(sysid) {
  var ga = new GlideAjax('x_abc_myscope.AjaxUtils');

  ga.addParam('sysparm_type', 'getPhoneNumberForUser');
  ga.addParam('sysparm_user', sysid);
  ga.getXMLAnswer(function(answer) {
    g_form.setValue('phone_number', answer);
  });
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GLAXV3-getXMLAnswer_F)