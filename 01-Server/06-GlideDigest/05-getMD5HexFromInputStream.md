##### 10/17/2019
# `getMD5HexFromInputStream(inputStream)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| inputStream | `GlideScriptableInputStream` | The source input stream. |

## Return value:
| Type | Description |
|---|---|
| `string` | The message digest. |

---

## Description:
Create a message digest from an input stream using the `MD5` algorithm.  The output `string` is in hexadecimal.

---

```js
var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
var digest = new GlideDigest();

gs.info(digest.getMD5HexFromInputStream(inputStream));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getMD5HexStrm_GSIS)