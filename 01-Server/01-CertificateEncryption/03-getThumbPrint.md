##### 6/27/2019
# `getThumbPrint(certificateID, algorithm)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| certificateID | `string` | `sys_id` of the certificate record in the `X.509 Certificate [sys_certificate]` table |
| algorithm | `string` | `SHA-1`, `SHA-256`, etc. |

## Return value:
| Type | Description |
|---|---|
| `string` | Thumbprint in `base64` format |

---

## Description:
Generates a hash (`SHA-1`, `SHA-256`, etc.) for the certificate from **Trust Store Cert**.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SCE-getThumbPrint_S_S)