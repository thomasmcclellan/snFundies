##### 7/01/2019
# `getThumbPrintFromKeystore(certificateID, alias, algorithm)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| certificateID | `string` | `sys_id` of the certifcate record in the `X.509 Certificate [sys_certificate]` table |
| alias | `string` | Alias name for the certificate |
| algorithm | `string` | `SHA-1`, `SHA-256`, etc. |

## Return value:
| Type | Description |
|---|---|
| `string` | Thumbprint in `base64` format |

---

## Description:
Generates a hash (`SHA-1`, `SHA-256`, etc.) for the certificate from the keystore entry.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SCE-getThumbPrintFromKeyStore_S_S_S)