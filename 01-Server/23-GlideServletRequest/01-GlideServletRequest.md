##### 6/11/2020
# `GlideServletRequest`
## Overview:
The `GlideServletRequest` API is used in processor scripts.

`SN` processors are equivalent to `Java` servlets.  Processors provide a customizable URL endpoint that can execute arbitrary server-side `JS` code adn produce output such as `TEXT`, `JSON`, or `HTML`.  The `GlideServletRequest` API is used in processor scripts to access the `HttpServletRequest` object.  The `GlideServletRequest` object provides a subset of the `HttpServletRequest` APIs.  The methods are called using the global variable `g_request`.

A useful global variable, `g_target`, is available in processor scripts.  It contains the table name extracted from the URL.

The URL to a processor has the format: `https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value>` where the `path` endpoint and `parameter` endpoint are defined on the processor form.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideServletRequestScopedAPI)