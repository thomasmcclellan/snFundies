##### 11/20/2019
# `getSections()`

## Return value:
| Type | Description |
|---|---|
| `array` of `HTML` elements | The form's sections. |

---

## Description:
Returns an `array` of the form's sections.

  > This method is not available on the mobile platform.  If this method is run on a mobile platform, no action occurs.

---

```js
function onChange(control, oldValue, newValue, isLoading) {
  // This example was run on a form divided into sections (Change form)
  // and hid a section when the 'state' field was changed
  var sections = g_form.getSections();

  if (newValue == '2')
    g_form.setSectionDisplay(sections[1], false);
  else
    g_form.setSectionDisplay(sections[1], true);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormGetSections)