##### 2/05/2020
# `GlideFormScratchpad`
## Overview:
The scoped `GlideFormScratchpad` class implements the `g_scratchpad` object for scoped applications.

The scoped `GlideFormScratchpad` class has no constructor and no methods.  The `g_scratchpad` object behaves identically for global and scoped applications.

The `g_scratchpad` object provides a mechanism for passing information from the server to the client when the client requires information not available on a form.  This can be accomplished by creating a business rule to put the information in the `g_scratchpad` object and accessing the information in a client script.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideFormScratchpadScopedAPI)