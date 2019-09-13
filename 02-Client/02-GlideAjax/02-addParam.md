##### 9/11/2019
# `addParam(parm_name, parm_value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| parm_name | `string` | The name of the parameter to pass (the name must begin with `sysparm_`). |
| parm_value | `string` | The value to assign to `parm_name`. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Specifies a parameter name and value to be passed to the server-side function associated with this `GlideAjax` object.

  > You can execute `addParam()` multiple times with different parameters and values.

  > **NOTE**: The first call to `addParam()` should be with the parameter `sysparm_name` and the name of the server-side method you want to call.  The server-side code does not execute until the client script calls `getXML()`.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_GLAX-addParam_S_S)