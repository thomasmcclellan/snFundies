##### 6/04/2020
# `GlideRecord(tableName)`
## Overview:
`GlideRecordV3` is used for database operations.  Client-side `GlideRecord` enables the use of some `GlideRecord` functionality in client-side scripts, such as client scripts and UI policy scripts.

A `GlideRecord` contains both records and fields.

Queries made with the client-side `GlideRecord` are executed on the server.  Therefore, a request is made from the client browser to obtain the record data.

  > **NOTE**: Client-side `GlideRecord` is not support in scoped applications.  Instead, create a script include and use `GlideAjax`, or use the REST API.

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| tableName | `string` | The table to be used. |

---

## Description:
Creates an instance of the `GlideRecord` `class` for the specified table.

---

```js
var gr = new GlideRecord('incident');
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideV3API)