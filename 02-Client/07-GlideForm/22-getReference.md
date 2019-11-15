##### 11/15/2019
# `getReference(fieldName, callBack)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| callBack | `function` | Name of the callback function. |

## Return value:
| Type | Description |
|---|---|
| `GlideRecord` | `GlideRecord` `object` for teh specified field.<br>If the specified reference cannot be found, it returns an initialized `GlideRecord` `object` where `currentRow = -1` and `rows.length = 0`. |

---

## Description:
Returns the `GlideRecord` for a specified field.

If a callback `function` is present, this routine runs **asynchronously**.  The browser (and script) processing continues normally until the server returns the reference value, at which time, the callback `function` is invoked.  If a callback `function` is not present, this routine runs **synchronously** and processing _halts_ (causing the browser to appear to hang) while waiting on a server response.

  > **IMPORTANT**: It is _strongly_ recommended that you use a callback `function`.

  > Callback `function` support for `ServiceCatalogForm.getReference` is available.

  > **NOTE**: Using this method requires a call to the server which requires additional time and may introduce latency to your page.  Use this method _with caution_.

---

```js
function onChange(control, oldValue, newValue, isLoading) {
  g_form.getReference('caller_id', doAlert) // doAlert is our callback function
}

function doAlert(caller) {
  if (caller.vip === 'true') 
    alert('Caller is a VIP!');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetReference_String_Function)