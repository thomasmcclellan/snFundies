##### 10/31/2019
# `getSHA256Hex(source)`

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
Create a message digest from a `string` using the `SHA256` algorithm.  The output `string` is in hexadecimal.

---

```js
var inputString = 'Her molasses moved slowly down the hill.';
var digest = new GlideDigest();

gs.info(digest.getSHA256Hex(inputString));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getSHA256Hex_S)