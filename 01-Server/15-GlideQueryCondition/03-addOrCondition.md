##### 2/14/2020
# `addOrCondition(name, oper?, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Field name. |
| oper (**Optional**) | `string` | Query operator. * |
| value | `object` | Value on which to query (not case-sensitive). ** |

  > *The available values are dependent on the data type of the _**value**_ parameter.
  > 
  > Numbers:
  >   * `=`
  >   * `!=`
  >   * `>`
  >   * `>=`
  >   * `<`
  >   * `<=`
  >
  > Strings:
  >   * `=`
  >   * `!=`
  >   * `IN`
  >   * `STARTSWITH`
  >   * `ENDSWITH`
  >   * `CONTAINS`
  >   * `DOESNOTCONTAIN`

  > ****NOTE**: All passed in `arrays` must contain a minimum of two elements.  Single element arrays are not supported.

## Return value:
| Type | Description |
|---|---|
| `GlideQueryCondition` | A reference to a `GlideQueryCondition` that was added to the `GlideRecord`. |

---

## Description:
Appends a two-or-three parameter `OR` condition to an existing `GlideQueryCondition`.

`addOrCondition()` works in conjunction with any of the `addQuery()` methods to `OR` the specified query parameter to the query previously constructed using `addQuery()`.

`addOrCondition()` is typically called with three parameter; table field; operator, and comparison value.  It can be called with only two parameters, table field and comparison value, such as `qc.addOrCondition('category', 'software');`.  The operator in this case is assumed to be `'equal to'`.

---

```js
var gr = new GlideRecord('incident'),
    qc = gr.addQuery('category', 'Hardware');
qc.addOrCondition('category', 'Network');
gr.addQuery('number', 'INC0000003');
gr.next();
gr.number;

gs.info(gr.getEncodedQuery());

// To group AND/OR statements to make complex queries, such as 'All incidents with a (state less than 3 OR greater than 5) AND (priority is 1 OR priority is 5)
var myObj = new GlideRecord('incident'),
    q1 = myObj.addQuery('state', '<', 3),
    q2 = myObj.addQuery('priority', 1);
q1.addOrCondition('state', '>', 5);
q2.addOrCondition('priority', 5);
myObj.query();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideQueryConditionOrAddCondition_String_name_String_oper_Object_value)