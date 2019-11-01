##### 10/22/2019
# `getSHA1Hex(source)`

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
Create a message digest from a `string` using the `SHA1` algorithm.  The output `string` is in hexadecimal.

---

```js
var inputString = 'Her molasses flowed slowly down the hill.';
var digest = new GlideDigest();

gs.info(digest.getSHA1Hex(inputString));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getSHA1Hex_S)