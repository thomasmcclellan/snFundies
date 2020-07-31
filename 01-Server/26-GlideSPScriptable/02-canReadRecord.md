##### 7/29/2020
# `canReadRecord(gr)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| gr | `GlideRecord` | The `GlideRecord` to check. |

## Return value:
| Type | Description |
|---|---|
| `boolean` | `true` if the record is valid and readable. |

---

## Description:
Returns `true` if the user can read the specified `GlideRecord`.

If the record type is `kb_knowledge`, `sc_cat_item`, or `sc_category`, the method checks if the user can view the item.

---

```js
//Server script
data.items = [];
data.userName = gs.getUserDisplayName();
var gr = new GlideRecord("sc_cat_item");
gr.query();
while(gr.next() && data.items.length < 10) {
    if ($sp.canReadRecord(gr)) {
        data.items.push(gr.getDisplayValue("name"));
    }
}

//HTML template
<div class="panel panel-default">
  <div class="panel-heading">Hi, {{ c.data.userName }}!</div>
  <div class="panel-body">
    Here are some things you can order:
    <ul><li ng-repeat="item in c.data.items">{{ item }}</li></ul>
  </div>
</div>
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/no-namespace/c_GlideSPScriptableScopedAPI#r_GSPS-canReadRecord_GR)