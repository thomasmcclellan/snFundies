##### 10/31/2019
# `flash(fieldName, color, count)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Specifies the field to highlight in the following format:<br>`"<table-name>.<field-name>"`. |
| color | `string` | RGB color or acceptable `CSS` color. |
| count | `number` | Specifies how long the label will flash. * |

  > *Options include:
  >   * 2: Flashes for 1 second
  >   * 0: Flashes for 2 seconds
  >   * -2: Flashes for 3 seconds
  >   * -4: Flashes for 4 seconds

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Used to draw attention to a particular field.  Flashes the specified color for a specified duration of time in the specified field.

  > This method is not supported by Service Catalog.

  > This method is not available on the mobile platform.  If this method is run on a mobile platform, no action occurs.

---

```js
g_form.flash('incident.number', '#fffacd', 0);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormFlash_String_String_Number)