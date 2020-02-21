##### 1/09/2020
# `refreshWithOrderBy(firstRow?, description?)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| firstRow (**Optional**) | `number` | The first row to appear in the list. |
| description (**Optional**) | `string` | Name-value pairs that are submitted with the list refresh request. |

## Return value:
| Type | Description |
|---|---|
| Void | Method does not return a value. |

---

## Description:
Refreshes the list.  The `orderBy` part of the list filter is included if it is speciied for the list.

---

```js
ga.getXML(function(serverResponse) {
  var response = serverResponse.responseXML.getElementsByTagName('response')[0];

  if (response) {
    var list = GlideList2.getByName('backlog_stories');
    var status = response.getAttribute('status');
    list.refreshWithOrderBy();

    $j('html, body').animate({ scrollTop: $j('#' + data.record.sys_id).offset().top }, 500);

    if (status === 'failure')
      alert('${ gs.getMessage("Story cannot be created.  Team is not associated with any project.") }');
  }
})
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GL2-refreshWithOrderBy_N_S)