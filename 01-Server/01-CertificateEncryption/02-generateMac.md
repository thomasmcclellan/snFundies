##### 6/24/2019
# `generateMac(key, algorithm, data)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| key | `string` | Key used to sign the message |
| algorithm | `string` | Algorithm used to generate the **MAC**: `HmacSHA256`, `HmacSHA1`, `HmacMD5`, etc. |
| data | `string` | Data to be processed |

## Return value:
| Type | Description |
|---|---|
| `string` | **MAC** is `base64` format |

---

## Description:
Generates the **Message Authentication Code** (**MAC**), which is used to authenticate a message.

---

```js
var mac = new CertificateEncryption;
mac.generateMac('sample_key', 'HmacSHA256', 'sample_data');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=madrid&id=r_SCE-generateMac_S_S_S)