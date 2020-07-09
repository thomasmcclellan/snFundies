##### 6/19/2020
# `query(responseFunction?, name?, value?)`
| Name | Type | Description |
|---|---|---|
| responseFunction (**Optional**) | `function` | The `function` called when the query results are available. |
| name (**Optional**) | `string` | A field name. |
| value (**Optional**) | `string` | The field value to check for. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Performs a query. Takes zero or more parameters. Parameters may be in any order. Any `function` is considered to be a response `function`. Any pair of literals is considered a query pair `(field : value)`.

Do not make synchronous query calls. Performing a query without a response `function` makes the call synchronous, which means that the display will wait for the query response before continuing.

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideV3API#r_GRCS3-query)