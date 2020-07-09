##### 6/23/2020
# `getUIScript(scriptName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| scriptName | `string` | API name of the UI script to run. |

## Return value:
| Type | Description |
|---|---|
| `Promise` | The result of the asynchronous call. |

---

## Description:
Calls a UI script with teh UI Type set to All or Desktop from a client script or other client-side code.  Returns a `promise`.

Use the `then()` method to perform an asynchronous action after the call resolves.

  > **NOTE**: This method is not supported in IE11 when called outside of the `Angular` application environment.  If calling a UI script outside of an `Angular` context using IE11, call the script directly using the `g_ui_scripts['nameOfScript'];` syntax.

---

```js
function onLoad() {
  g_ui_scripts.getUIScript('myUIScript')
    .then(function(script) {
      script.myUIScriptMethod();
    }, function() {
      console.log('The script did not load');
    });
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/GUIScriptsAPI#GUIScripts-getUIScript_S)