##### 12/30/2019
# `setReadOnly(fieldName, readOnly)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | Name of the field. |
| readOnly | `boolean` | When `true`, makes the field read only; when `false`, makes the field editable. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Makes the specified field read only or editable.

  > Whenever possible, use a UI Policy instead of this method.

  > **NOTE**: The `function` name `setReadonly()` also works.

  > **NOTE**: To make a mandatory field read-only, you must first remove the mandatory requirement for that field by using the `setMandatory()` method.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormSetReadOnly_String_Boolean)