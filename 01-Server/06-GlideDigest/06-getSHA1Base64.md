##### 10/18/2019
# `getSHA1Base64(source)`

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
Create a message digest from a `string` using the `SHA1` algorithm.  The output `string` is in `Base64`.

---

```js
var inputString = 'Her molasses flowed slowly down the hill.';
var digest = new GlideDigest();

gs.info(digest.getSHA1Base64(inputString));
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GDOC-getElement_S_E)