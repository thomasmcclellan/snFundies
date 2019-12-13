##### 12/10/2019
# `getDecryptedValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The clear text password. |

---

## Description:
Returns the clear text value for `Password` (2-way encrypted) fields in scoped applications.

---

```js
var tableName = 'x_scoped_app_table';
var ci = new GlideRecord(tableName);
var password = ci.password_field;
var decrypted = password.getDecryptedValue();

ci.addQuery('number', '0001002');
ci.query();
ci.next();

gs.info(decrypted);
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-getDecryptedValue)