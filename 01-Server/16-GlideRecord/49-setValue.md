##### 4/23/2020
# `setValue(name, value)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| name | `string` | Name of the field. |
| value | `object` | The value to assign to the field. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the value of the field with the specified name to the specified value.

Normally the script does a `gr.category = value`.  However, if the element name is itself a variable then `gr.setValue()` can be used.  When setting a value, ensure the data type of the field matches the data type fo the value you enter.

---

```js
var elementName = 'short_description',
    gr = new GlideRecord('incident');

gr.initialize();
gr.setValue(elementName, 'My DB is not working');
gr.insert();
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordSetValue_String_Object)