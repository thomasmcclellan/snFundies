##### 9/10/2019
# `GlideAjax(class_name)`
## Overview:
The `GlideAjax` class enables a client script to call server-side code in a script include.

To use `GlideAjax` in a client script, follow these general steps.
  * Create a `GlideAjax` instance by calling the `GlideAjax` constructor.  
  * As the argument to the constructor, specify the name of the script include class that contains the method you want to call.
  * Call the `addParam` method with the `sysparm_name` parameter and the name of the script-include method you want to call.
  * (Optional) Call the `addParam` method one or more times to provide the script-include code with other parameters it needs.
  * Execute the server-side code by calling `getXML()`.

  > **NOTE**: `getXML()` is the preferred method for executing the code, because it is asynchronous and does not hold up the execution of other client code.  Another method, `getXMLWait()`, is also available but is not recommended.  Using `getXMLWait()` ensures the order of execution, but can cause the application to seem unresponsive, significantly degrading the user experience of any application that uses it.  `getXMLWait()` is not available to scoped application.

```js
var ga = new GlideAjax('HelloWorld'); // HelloWorld is the script include class

ga.addParam('sysparm_name', 'helloWorld'); // helloWorld is the script include method
ga.addParam('sysparm_user_name', 'Bob'); // Set parameter sysparm_user_name to 'Bob'
ga.getXML(HelloWorldParse); // Call HelloWorld.helloWorld() with the parameter sysparm_user_name set to 'Bob' and use the callback function HelloWorldParse() to return the result when ready

// The callback function for returning the result from the server-side code
function HelloWorldParse(res) { 
  var answer = res.responseXML.documentElement.getAttribute('answer');

  alert(answer);
}
```

---

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| class_name | `string` | the name of the server-side class that contains the method you want to execute. |

---

## Description:
Constructor for `GlideAjax`.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_GLAX-GlideAjax_S)