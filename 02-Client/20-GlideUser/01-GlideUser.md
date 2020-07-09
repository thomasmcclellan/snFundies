##### 7/07/2020
# `GlideUser`
## Overview:
The `GlideUser` API provides access to information about the current user and current user roles. Using the `GlideUser` API avoids the need to use the slower `GlideRecord` queries to get user information.

The `GlideUser` methods and properties are accessed through a global `object` (`g_user`) that is only available in client scripts. `GlideUser`:
  * contains name and role information about the current user.
  * is typically used in client scripts and UI policies but is also found in UI actions that run on the client.
  * cannot be used in business rules or UI actions that run on the server.
  * avoids the need for `GlideRecord` queries to get user information.


Session information about the current user and current user roles is contained in the client (web browser). All `GlideUser` methods except `getClientData()` access the session information that is available by default. The `getClientData()` method requires setup on the server and use of `putClientData()` to make session information available.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideUserAPI)