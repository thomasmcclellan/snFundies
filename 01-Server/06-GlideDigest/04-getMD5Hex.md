##### 10/17/2019
# `getMD5Hex(source)`

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
Create a message digest from a `string` using the `MD5` algorithm.  The output `string` is in hexadecimal.

---

```js
var inputString = 'Her molasses flowed slowly down the hill.';
var digest = new GlideDigest();

gs.info(digest.getMD5Hex(inputString));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_SGDigest-getMD5Hex_S)