##### 10/02/2019
# `constant(constant)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| constant | `string` | A constant value used in a `function`. * |

  > *When used with a `dayofweek()` method, the value defines whether the week starts on a Sunday or Monday.
  >   1. Week begins on Sunday
  >   2. Week begins on Monday.
  > 
  > This definition enables the `dayofweek()` method to return the correct day of the week from a given date.  If a value other than 1 or 2 is provided, the `dayofweek()` method uses Sunday as the first day of the week.

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Defines a constant value to use in the function.  If used with the `dayofweek()` method, the string defines whether to use Sunday or Monday as the first day of the week.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=GlideDBFBScoped-constant_S)