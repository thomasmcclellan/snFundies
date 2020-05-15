##### 5/15/2020
# `addQuery(name, operator, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Name of the field to check. |
| operator | `object` | Query operator. * |
| value | `object` | Value on which to query (not case-sensitive). |

  > *The available values are dependent on the data type of the _value_ parameter:
  > 
  > `Numbers`: 
  >   * `=`
  >   * `!=`
  >   * `>`
  >   * `>=`
  >   * `<`
  >   * `<=`  
  > 
  > `Strings` (Must be UPPERCASE): 
  >   * `=`
  >   * `!=`
  >   * `IN`
  >   * `NOT IN`
  >   * `STARTSWITH`
  >   * `ENDSWITH`
  >   * `CONTAINS`
  >   * `DOES NOT CONTAIN`
  >   * `INSTANCEOF`

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a filter to return records where the field meets the specified condition (field, operator, value).

If you are familiar with `SQL`, this method is similar to the `where` clause.  You can create on or more queries for a single filter by calling this method multiple times.  Once you define all of the desired queries, call the `GlideRecord` `query()` to execute the specified query clause.

  > To create more complex queries, use the `setEncodedQuery()` method.

---

```js
var gr = new GlideRecord('incident');
gr.addQuery('priority', '<=', 2); // Priority is 2 or higher and,
gr.addQuery('short_description', 'CONTAINS', 'crash'); // Short description contains the word crash
gr.query(response);
 
function response(result) {
    while(result.next()) {
       // Print all INC with priority of 2 or higher AND short description contains "crash"
        console.log(result.getValue('number')); 
    }
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_GlideRecordClientSideAPI#r_GRCS-addQuery_S_O_O)