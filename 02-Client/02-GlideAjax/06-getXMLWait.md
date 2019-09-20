##### 9/17/2019
# `getXMLWait()`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sends the server a request to execute the method and parameters associated with this `GlideAjax` object.

The server processes the request synchronously and will not process further requests from the client until finished.  To retrieve the results, the client must call `getAnswer()`.  Using `getXMLWait()` ensures the order of execution, but can cause the application to seem unresponsive, significantly degrading the user experience of any application that uses it.  SN recommends using `getXML()` instead.

  > **NOTE**: `getXMLWait()` is not available to scoped applications.

### Scoped Equivalent: 
  > `getXMLWait()` is not available to scoped applications.  Instead, use the `getXML()` method.

---

```js
var ga = new GlideAjax('HelloWorld');

ga.addParam('sysparm_name', 'helloWorld');
ga.addParam('sysparm_user_name', 'Bob');
ga.getXMLWait();

alert(ga.getAnswer());
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GLAX-getXMLWait)