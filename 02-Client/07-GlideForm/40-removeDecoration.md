##### 12/16/2019
# `removeDecoration(fieldName, icon, title, ?color)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Field name. |
| icon | `string` | Name of the icon to remove. |
| title | `string` | The icon's text title (name). |
| color (**Optional**) | `string` | A `CSS` color. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Removes the icon from the specified field that matches the icon, title, and, optionally, color.

  > **NOTE**: This method is not supported by Service Catalog.

---

```js
function onChange(control, oldValue, newValue, isLoading) {
  // If the caller_id field is not present, then we can't add an icon anywhere
  if (!g_form.hasField('caller_id')) 
    return;

  if (!newValue)
    return;

  g_form.getReference('caller_id', function(ref) {
    g_form.removeDecoration('caller_id', 'icon_star', 'VIP', 'blue');

    if (ref.getValue('vip') === 'true') 
      g_form.addDecoration('caller_id', 'icon_star', 'VIP', 'blue');
  });
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormRemoveDecoration_String_String_String)