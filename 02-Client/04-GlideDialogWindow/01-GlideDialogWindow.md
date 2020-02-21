##### 9/26/2019
# `GlideDialogWindow(id, readOnly?, width?, height?)`

## Overview: 
The `GlideDialogWindow` API provides methods for displaying a dialog in the current window and frame.

  > Use these methods in scripts anywhere that you can use client-side `JS`.  These methods are most often called from a **UI action** with the _Client_ checkbox selected.

  > **NOTE**: This API has been deprecated, use the `GlideModalV3` API instead. 

---

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| id | `string` | Name of the UI page to load into the dialog window. |
| readOnly (**Optional**) | `boolean` | Flag that indicates whether the dialog window is read only (`true`) or read/write (`false`).  Default: `false`. |
| width (**Optional**) | `number` | Size (in `px`) to set the width of the dialog window. |
| height (**Optional**) | `number` | Size (in `px`) to set the height of the dialog window. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Provides methods for displaying a dialog in the current window and frame.

---

```js
// Creates a dialog window
var gdw = new GlideDialogWindow('show_list');

// Creates a read-only dialog window
var gdw = new GlideDialogWindow('show_list', true);

// Creates a dialog window that is 400px wide
var gdw = new GlideDialogWindow('show_list', false, 400);

// Creates a dialog window that is 400px wide and 20px tall
var gdw = new GlideDialogWindow('show_list', false, 400, 200);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideDialogWindowAPI)