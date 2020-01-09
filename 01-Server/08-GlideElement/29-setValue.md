##### 12/31/2019
# `setValue(value)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| value | `object` | `Object` value to set the field to. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Sets the value of a field.

  > **NOTE**: Before calling this method, the element must already exist by querying an existing record or by using the `gr.initialize()` method to initialize a new record.

---

```js
var glideRecord = new GlideRecord('incident');
glideRecord.query('priority', '1');
glideRecord.next();
glide.short_description.setValue('Network failure');

gs.info(glideRecord.short_description);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementSetValue_Object_value)