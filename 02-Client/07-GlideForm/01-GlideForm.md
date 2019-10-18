##### 10/14/2019
# `GlideForm`
## Overview: 
The `GlideForm` API provides methods to customize forms.  `GlideForm.js` is the `JS` class containing the method.  The global `object` `g_form` is used to access `GlideForm` methods.  `GlideForm` methods are only used on the **client**.

These methods are used to make custom changes to the form view of records.  All validation of examples was done using _Client Scripts_.

Some of these methods can also be used in other client scripts (such as _Catalog Client Scripts_ or _Wizard Client Scripts_) but must first be tested to determine whether they will work as expected.

  > **NOTE**: The methods `getControl()`, `getHelpTextControl()`, `getElement()`, and `getFormElement()` are deprecated for mobile devices.  For information on using `GlideForm` for mobile, see [Mobile Client `GlideForm(g_form)` Scripting and Migration](https://docs.servicenow.com/bundle/newyork-application-development/page/script/client-scripts/reference/r_MobilePlatformMigrationImpacts.html?_ga=2.263547852.1928654075.1571322219-1125510295.1570109335)

  > There is no constructor for the `GlideForm` class.  Access `GlideForm` methods using the `g_form` global `object`.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideDialogWindowAPI)