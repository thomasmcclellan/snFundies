##### 1/09/2020
# `getRelated()`
## Return value:
| Type | Description |
|---|---|
| `string` | Field that connects the list to the parent form. |

---

## Description:
Returns the related list field that associates the related list to the parent form.

---

```js
var list = GlideList2.get(name),
    related = list.getRelated();

if (related)
  ajax.addParam('sysparm_is_related_list', 'true');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-getRelated)