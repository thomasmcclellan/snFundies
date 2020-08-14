##### 8/11/2020
# `getKBCategoryArticleSummaries(sys_id, limit, maxChars)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| sys_id | `string` | `Sys_id` of the KB article category. |
| limit | `number` | Maximum number of KB articles returned. |
| maxChars | `number` | Maximum number of characters to return from the article text.  For full article text, set the value to -1. |

## Return value:
| Type | Description |
|---|---|
| `array` | The articles within the category and its subcategories with:<br>A `workflow_state` of published<br>A `valid_to` date greater than or equal to the current date. |

---

## Description:
Returns KB article summaries in the specified category and its subcategories.

---

```js
//Server script 
(function() {
    data.summary = $sp.getKBCategoryArticleSummaries("0ac1bf8bff0221009b20ffffffffffec", 5, 200);
})();

//HTML template
<div>
articles: {{::data.summary}}
</div>
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#GSPS-getKBCategoryArticleSummaries_S_N_N)