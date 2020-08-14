##### 8/10/2020
# `getKBCategoryArticles(sys_id, limit)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| sys_id | `string` | `Sys_id` of the KB article category. |
| limit | `number` | Maximum number of KB articles returned. |

## Return value:
| Type | Description |
|---|---|
| `array` | The articles within the category and its subcategories with:<br>A `workflow_state` of published<br>A `valid_to` date greater than or equal to the current date. |

---

## Description:
Returns KB articles in a specified category and its subcategories.

  > **NOTE**: To avoid performance issues, do not use this method to return articles in large categories or articles in inline images.  Instead, use `getKBArticleSummaries()`.

---

```js
//Server script 
(function() {
    data.kbs = $sp.getKBCategoryArticles("0ac1bf8bff0221009b20ffffffffffec", 5);
})();

//HTML template
<div>
articles: {{::data.kbs}}
</div>
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#GSPS-getKBCategoryArticles_S_N)