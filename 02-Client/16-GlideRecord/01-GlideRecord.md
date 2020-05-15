##### 5/13/2020
# `GlideRecord(tableName)`
## Overview:
`GlideRecord` is used for database operations.  The client-side `GlideRecord` API enables the use of some `GlideRecord` functionality in client-side scripts, such as client scripts and UI policy scripts.

A `GlideRecord` contains both records and fields.  Queries made with the client-side `GlideRecord` are executed on the server.  Therefore, a request is made from the client browser to obtain the record data.

The client-side `GlideRecord` API is not supported in scoped applications.  Instead, create a script include and use the `GlideAjax` API, or use the REST APIs. In addition, the client-side `GlideRecord` API applies ACLs based on teh credentials of the user executing the script.  To execute the code on the server without ACLs, use the `GlideAJAX` API.

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| tableName | `string` | The table to be used. |

---

## Description:
Creates an instance of the `GlideRecord` class for the specified table.

---

```js
var gr = new GlideRecord('incident');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI)