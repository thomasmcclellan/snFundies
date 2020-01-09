##### 12/31/2019
# `setSectionDisplay(sectionName, display)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| sectionName | `string` | The section name is lower case with an underscore, replacing the first space in the name, and with the remaining spaces being removed (i.e. `'Section Four is Here'` becomes `'section_fourishere'`).  Other non-alphanumeric characters, such as ampersand (`&`), are removed.  Section names can be found by using the `getSectionName()` method. |
| display | `boolean` | When `true`, shows the section; otherwise, `false`. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Returns `true` when successful. |

---

## Description:
Shows/hides a section.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSetSectionDisplay_String_Boolean)