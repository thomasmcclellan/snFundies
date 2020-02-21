##### 1/13/2020
# `addAddress(type, address, displayName?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| type | `string` | Either `cc` or `bcc`, determines the list to which the address is added. |
| address | `string` | The recipient's email address. |
| displayName (**Optional**) | `string` | The name to be shown instead of the email address. |

## Return value:
| Type | Description |
|---|---|
| Void | method does not return a value. |

---

## Description:
Adds the address to either the `cc` or `bcc`.

If present, uses `displayName` instead of the address when showing the recipient.

---

```js
email.addAddress('cc', 'joe.employee@something.com');
email.addAddress('cc', 'joe.employee@something.com', 'dudley rocks');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_ScopedGlideEmailOutbound-addAddress_String_String)