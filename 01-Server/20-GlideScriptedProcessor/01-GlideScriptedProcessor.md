##### 5/21/2020
# `GlideScriptedProcessor`
## Overview:
`SN` processors are equivalent to `Java` servlets.

Processors provide a customizable URL endpoint that can execute arbitrary server-side `JS` code and produce output such as `TEXT`, `JSON`, `HTML`.  The `GlideScriptedProcessor` APIIs are used in processor scripts to access the processor (servlet) capabilities.  There are no constructors for the `GlideScriptedProcessor` APIs.  the methods are called using the global variable `g_processor`.

A useful global variable, `g_target`, is available in processor scripts.  It contains the table name extracted from the URL.

The URL to a processor has the format: `https://<instance name.servicenow.com>/<path endpoint>.do?<parameter endpoint>=<value>` where the path endpoint and parameter endpoint are defined on the processor form.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideScriptedProcessorScopedAPI)