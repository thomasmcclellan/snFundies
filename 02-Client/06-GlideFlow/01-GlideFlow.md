##### 10/02/2019
# `GlideFlow`
## Overview: 
Use the `GlideFlow` `JS` API for client-side interactions with actions, flow, and subflows.

Use the `GlideFlow` API anywhere in platform that accepts client scripts.  The action, flow, or subflow must be set as client callable, and have a valid ACL using the Manage Security feature in Flow designer.

  > Some of the methods within `GlideFlow` return `promise` objects.  A `promise` represents the eventual results of an asynchronous operation.  

  > Using this API, you can:
  >   * Start actions, flows, or subflows via a script
  >   * Get an existing exectution
  >   * Get the status and any available outputs
  >   * Wait for the completion of an action, flow, or subflow

There is no constructor for the `GlideFlow` class.  Access `GlideFlow` methods using the `GlideFlow` global object.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideFlowAPI)