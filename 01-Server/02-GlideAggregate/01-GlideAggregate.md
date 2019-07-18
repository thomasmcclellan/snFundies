##### 7/03/2019
# `GlideAggregate(tableName)`

## Overview:
`GlideAggregate` enables you to easily create database aggregation queries.  
The scoped `GlideAggregate` class is an extension of `GlideRecord` and provides db aggregation (**COUNT**, **SUM**, **MIN**, **MAX**, **AVG**) queries.  This functionality can be helpful when creating customized reports or in calculations for calculated fields. 

  > The `GlideAggregate` class works only on number fields

When you use `GlideAggregate` on currency or price fields, you are working with the reference currency value.  Be sure to convert the aggregate values to the user's session currency for display.  Because the conversion rate between the currency or price value (displayed value) and its reference `currency` value (aggregate value) might change, the result may not be what the user expects.

  > **NOTE**: When using an on-premise system, the db server time zone must be set to **GMT/UTC** for this class to work properly.

---

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| tableName | String | Name of the table |

---

```js
var count = new GlideAggregate('incident');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_ScopedGlideAggregateGlideAggregate_String)