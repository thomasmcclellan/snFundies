##### 5/20/2020
# `GlideScriptableInputStream`
## Overview:
A `GlideScriptableInputStream` object cannot be instantiated directly, but is used as an opaque `object` which is used to connect an input stream from `GlideSysAttachment.getContentStream()` with other streaming APIs, such as `GlideTextReader`, `GlideDigest`, and `XMLDocument2`.

  > See the scoped `GlideSysAttachment` API for methods that return a `GlideScriptableInputStream` object.  THe scoped `GlideTextReader` constructor requires a `GlideScriptableInputStream` object as an input parameter.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScriptableInpStrmScopedAPI)