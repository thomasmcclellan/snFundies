##### 8/03/2020
# `getAllTours(cb_function)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| cb_function | `function` | Callback function called by getAllTours() after attempt to fetch all tours for the current page from which getAllTours() method is called.
 |
| cb_function. | `object` | Points to the error object if any occurred during the operation: err = { success: false, message: 'string containing the error object' }; Null otherwise. |
| cb_function. | `array` | 	List of available tours for the page. If no tours are present on the page, cb_function.tours returns undefined. |

---

## Description:
Gets a list of tours on the current page from which this method is called. Because this method is asynchronous, a callback function must be passed to determine operation success and get a list of tours.

Complete signature includes top.NOW.guided_tours.api preceding the method name.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/guided_toursAPI#GT-getAllTours_F)