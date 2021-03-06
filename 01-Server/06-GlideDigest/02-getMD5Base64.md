##### 10/15/2019
# `getMD5Base64(source)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| source | `string` | The source `string`. |

## Return value:
| Type | Description |
|---|---|
| `string` | The message digest. |

---

## Description:
Create a message digest from a `string` using the `MD5` algorithm.  The output string is in `Base64`.

---

```js
var inputString = 'Her molasses flowed slowly down the hill.';
var digest = new GlideDigest();

gs.info(digest.getMD5Base64(inputString));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getMD5Base64_S)