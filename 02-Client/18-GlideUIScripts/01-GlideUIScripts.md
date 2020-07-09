##### 6/22/2020
# `GlideUIScripts`
## Overview:
Access UI scripts from within client-side code.

There is no constructor for this `class`.  Access methods using the `g_ui_scripts` global `object` in any client-side code, such as client or validation scripts.

If calling a UI script with UI Type to set to Mobile/Service Portal, use the `g_ui_scripts['nameOfScript'];` syntax.  If calling a UI script with the UI Type set to All or Desktop, use the `getUIScript()` method to load the script.  However, this method is not supported in IE11 when called outside of the `Angular` application environment.  If calling a UI script outside of an `Angular` context using IE11, you must call the script directly.

  > **NOTE**: This `class` does not support UI scripts with the Global field set to `true`.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/GUIScriptsAPI)