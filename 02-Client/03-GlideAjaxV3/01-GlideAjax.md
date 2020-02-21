##### 9/18/2019
# GlideAjaxV3
## Overview:
The `GlideAjaxV3` API provides the ability to asynchronously execute server-side scripts from a client-side script.

The `GlideAjaxV3` API can be used in client-side scripting using `ListV2` and `ListV3` APIs.

# `GlideAjax(processor)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| processor | `string` | The name of the processor (server-side script) to call. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

# `GlideAjax(processor, targetURL?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| processor | `string` | The name of the processor (server-side script) to call. |
| targetURL | `string` | (Optional) Override the xmlhttp processor url.  If this parameter is not specified, the default is xmlhttp.do. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Creates an instance of the `GlideAjaxV3` class.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideAjaxV3API)