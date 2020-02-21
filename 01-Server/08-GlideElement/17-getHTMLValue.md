##### 12/16/2019
# `getHTMLValue(maxChars?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| maxChars (**Optional**) | `number` | Maximum number of characters to return. |

## Return value:
| Type | Description |
|---|---|
| `string` | `HTML` value for the field. |

---

## Description:
Returns the `HTML` value of a field.

---

```js
var incCause = new GlideRecord('incident');

incCause.short_description = current.short_description;
incCause.comments = current.comments.getHTMLValue();
incCause.insert();
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-getHTMLValue_Number)