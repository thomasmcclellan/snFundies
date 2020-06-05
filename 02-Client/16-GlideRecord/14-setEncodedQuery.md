##### 6/02/2020
# `getEncodedQuery(encodedQuery)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| encodedQuery | `string` | Encoded query `string` to add to the current query clause. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a specified encoded query `string` to the current query clause.

This method enables you to specify complex filters (encoded query `strings`) in a single query call, unlike other client-side `addQuery()` methods.  Once you define all of the desired queries, call the `GlideRecord` `query()` to execute the specified query clause (filter).  

If you call this method multiple times before calling the `query()` method, the queries are `AND`'ed together.

---

```js
var gr = new GlideRecord('incident');
gr.setEncodedQuery('priority=4^ORstate=3');
gr.query(response);

function response(result) {
  while (result.next()) {
    console.log(result.getValue('number'));
  }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-setEncodedQuery)