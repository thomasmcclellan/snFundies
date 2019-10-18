##### 10/15/2019
# `addDecoration(fieldName, icon, title)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |
| icon | `string` | The font icon to show next to the field. * |
| title | `string` | The text title for the icon. |

  > *Supported icons:    
  >   * icon-user,   
  >   * icon-user-group,   
  >   * icon-lightbulb,   
  >   * icon-home,   
  >   * icon-mobile,   
  >   * icon-comment,   
  >   * icon-mail,   
  >   * icon-locked,   
  >   * icon-database,   
  >   * icon-book,   
  >   * icon-drawer,   
  >   * icon-folder,   
  >   * icon-catalog,   
  >   * icon-tab,   
  >   * icon-cards,   
  >   * icon-tree-right,   
  >   * icon-tree,   
  >   * icon-book-open,   
  >   * icon-paperclip,   
  >   * icon-edit,   
  >   * icon-trash,   
  >   * icon-image,   
  >   * icon-search,   
  >   * icon-power,   
  >   * icon-cog,   
  >   * icon-star,   
  >   * icon-star-empty,   
  >   * icon-new-ticket,   
  >   * icon-dashboard,   
  >   * icon-cart-full,   
  >   * icon-view,   
  >   * icon-label,   
  >   * icon-filter,   
  >   * icon-calendar,   
  >   * icon-script,   
  >   * icon-add,   
  >   * icon-delete,   
  >   * icon-help,   
  >   * icon-info,   
  >   * icon-check-circle,   
  >   * icon-alert,   
  >   * icon-sort-ascending,   
  >   * icon-console,   
  >   * icon-list,   
  >   * icon-form, and   
  >   * icon-livefeed.

## Return value:
| Type | Description |
|---|---|
| Void | method does not return a value. |

---

## Description:
Adds an icon on a field's label.

Adding the same item twice is prevented; however, you can add the same icon with a different title.

  > **NOTE**: This method is not supported by _Service Catalog_.

---

```js
g_form.addDecoration('caller_id', 'icon-star', 'preferrer member');
```

---

# `addDecoration(fieldName, icon, title, color)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| fieldName | `string` | The field name. |
| icon | `string` | The font icon to show next to the field. * |
| title | `string` | The text title for the icon. |
| color | `string` | A `CSS` color. |

## Return value:
| Type | Description |
|---|---|
| Void | method does not return a value. |

---

## Description:
Adds an icon on a field's label.

Adding the same item twice is prevented; however, you can add the same icon with a different title.

  > **NOTE**: This method is not supported by _Service Catalog_.

---

```js
g_form.addDecoration('caller_id', 'icon-star', 'Mark as Favorite', 'color-green');
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=r_GlideFormAddDecoration_String_String_String)