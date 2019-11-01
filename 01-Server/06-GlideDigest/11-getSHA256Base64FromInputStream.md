##### 10/30/2019
# `getSHA256Base64FromInputStream(inputStream)`

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
Create a message digest from an input stream using the `SHA256` algorithm.  The output `string` is in `Base64`.

---

```js
var inputStream = new GlideSysAttachment().getContentStream(attachmentSysID);
var digest = new GlideDigest();

gs.info(digest.getSHA256Base64FromInputStream(inputStream));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getSHA256B64S_GSIS)