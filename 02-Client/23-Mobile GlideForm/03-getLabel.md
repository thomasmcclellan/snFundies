##### 8/14/2020
# `getLabel(fieldName)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |

## Return value:
| Type | Description |
|---|---|
| `string` | The label text. |

---

## Description:
Gets the form label text.

---

```js
if (g_user.hasRole('itil')) {
  var oldLabel = g_form.getLabel('comments');
  g_form.setLabel('comments', oldLabel + ' (Customer visible)');
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/c_MobileGlideForm_API#r_MGF-getLabel_S)