##### 1/06/2020
# `getInternalType()`
## Return value:
| Type | Description |
|---|---|
| `string` | The element's internal data type.  * |

  > *Possible values:
  >   * `boolean`
  >   * `car`
  >   * `collection`
  >   * `conditions`
  >   * `date`
  >   * `decimal`
  >   * `documentation_field`
  >   * `domain_id`
  >   * `due_date`
  >   * `email`
  >   * `field_name`
  >   * `file_attachment`
  >   * `float`
  >   * `glide_date`
  >   * `glide_date_time`
  >   * `glide_duration`
  >   * `glide_list`
  >   * `GUID`
  >   * `html`
  >   * `image`
  >   * `integer`
  >   * `long`
  >   * `longint`
  >   * `multi_two_lines`
  >   * `journal`
  >   * `journal_input`
  >   * `numeric`
  >   * `order_index`
  >   * `password`
  >   * `ph_number`
  >   * `reference`
  >   * `script`
  >   * `script_plain`
  >   * `string`
  >   * `sys_class_name`
  >   * `table_name`
  >   * `template_value`
  >   * `timer`
  >   * `translated_field`
  >   * `url`
  >   * `user_image`
  >   * `user_input`
  >   * `user_roles`
  >   * `video`
  >   * `workflow`

---

## Description:
Returns the element's internal data type.

---

```js
var grInc = new GlideRecord('incident');
grInc.query('priority', '1');

var field = grInc.getElement('priority'),
    ed = field.getED(),
    isEdge = ed.getInternalType();

gs.info(isEdge);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideElementDescriptorGetInternalType)