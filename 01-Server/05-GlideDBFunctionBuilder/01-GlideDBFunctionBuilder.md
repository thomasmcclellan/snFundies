##### 9/26/2019
# `GlideDBFunctionBuilder()`

## Overview:
Build functions to perform `SQL` operations in the database.

The `GlideDBFunctionBuilder` methods provide a way to build `Relational Database Management System` (**RDBMS**) functions to perform `SQL` operations on record data.  These methods can be used in both scoped and global server scripts.

To use platform functions:
  * Construct a function using the `GlideDBFunctionBuilder` constructor and associated methods
  * After building a function, you cna apply the function to the current record using the `addFunction()` method of the `GlideRecord` class
  * Add the function to a query using the `addQuery()` method of the `GlideRecord` class
  * Retrieve the results of the function using the existing `GlideRecord` API methods such as `getValue()` and `getElement()`

---

## Description:
Instantiates a `GlideDBFunctionBuilder` object.

---

```js
var builder = new GlideDBFunctionBuilder();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFunctionBuilderScopedAPI)