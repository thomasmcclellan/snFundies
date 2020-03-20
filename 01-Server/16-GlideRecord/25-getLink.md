##### 3/20/2020
# `getLink(noStack)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| noStack | `boolean` | If `true`, the `sysparm_stack` parameter is not appended to the link.  The parameter `sysparm_stack` specifies the page to visit after closing the current link. |

## Return value:
| Type | Description |
|---|---|
| `string` | A link to the current record as a `string`. |

---

## Description:
REtrieves a link to the current record.

---

```js
var gr = new GlideRecord('incident');
gr.addActiveQuery();
gr.addQuery('priority', 1);
gr.query();
gr.next();

gs.info(gs.getProperty('glide.servlet.uri') + gr.getLink(false));
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/server/r_ScopedGlideRecordGetLink_Boolean)