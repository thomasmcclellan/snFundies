##### 4/03/2020
# `isEncodedQueryValid(query)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| query | `string` | Encoded query to validate. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | Indicates whether the specified encoded query is valid:  `true` (passed-in encoded query is valid) and `false` (passed-in encoded query is not valid). |

---

## Description:
Verifies whether the specified encoded query is valid.

---

```js
var gr = new GlideRecord('incident'),
    isValidQuery = gr.isEncodedQueryValid('inc_impact=1^taskslatable_active=true');

if (isValidQuery) {
  gr.addEncodedQuery('inc_impact=1^taskslatable_active=true');
  gr.query();
  ...
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideRecordScopedAPI#SGR-isEncodedQueryValid_S)