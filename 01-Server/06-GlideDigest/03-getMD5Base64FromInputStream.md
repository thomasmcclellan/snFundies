##### 10/16/2019
# `getMD5Base64FromInputStream(inputStream)`

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
Create a message digest from an input stream using the `MD5` algorithm.  The output `string` is in `Base64`.

---

```js
var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
var digest = new GlideDigest();

gs.info(digest.getMD5Base64FromInputStream(inputStream));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getMD5Base64FrStrm_GSIS)