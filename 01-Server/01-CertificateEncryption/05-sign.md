##### 7/02/2019
# `sign(certificateID, alias, aliasPassword, algorithm, dataToSign)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| certificateID | `string` | `sys_id` of the certificate record in the `X.509 Certificate [sys_certificate]` table |
| alias | `string` | Private key name |
| aliasPassword | `string` | Password for the private key |
| algorithm | `string` | Data to sign |
| dataToSign | `string` | `SHA-1`, `SHA-256`, etc. |

## Return value:
| Type | Description |
|---|---|
| `string` | Signed data in `base64` format |

---

## Description:
Signs the data using the private key and the given algorithm.

---

```js
var ce = new CertificateEncryption;
ce.sign('recordID', 'alias', 'password', 'SHA-1', 'sign this data');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SCE-sign_certificateID_S_S_S_S)