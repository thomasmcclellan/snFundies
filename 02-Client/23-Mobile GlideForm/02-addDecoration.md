##### 8/13/2020
# `addDecoration(fieldName, icon, text)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |
| icon | `string` | The font icon to show next to the field. |
| text | `string` | The text title for the icon (used for screen readers). |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Adds a decorative icon next to the field.

---

```js
function onChange(control, oldValue, newValue, isLoading) {
  // if the caller_id field is not present, then we can't add an icon anywhere
  if (!g_form.hasField('caller_id'))
      return;
  
  if (!newValue)
      return;
  
  g_form.getReference('caller_id', function(ref) {
  g_form.removeDecoration('caller_id', 'icon-star', 'VIP');
  
  if (ref.getValue('vip') == 'true')
    g_form.addDecoration('caller_id', 'icon-star', 'VIP');			
  });
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_MobileGlideForm_API#r_MGF-addDecoration_S_S_S)