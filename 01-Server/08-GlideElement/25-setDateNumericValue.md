##### 12/31/2019
# `setDateNumericValue(milliseconds)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| milliseconds | `number` | Number of milliseconds since 1/01/1970. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.  

When called, `setDateNumericValue()` automatically creates the necessary `GlideDateTime`/`GlideDate`/`GlideDuration` object, and then sets the element to the specified value.

  > **NOTE**: Before calling this method, the element must already exist by querying an existing record or by using the `gr.initialize()` method to initialize a new record.

---

```js
var gr = new GlideRecord('incident');
gr.initialize();
gr.opened_by.setDateNumericValue(10000);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-setDateNumericValue_N)