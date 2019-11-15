##### 11/13/2019
# `getValue()`

## Return value:
| Type | Description |
|---|---|
| `string` | The duration in the `object`'s internal format, which is the date and time from January, 1, 1970, 00:00:00 UTC. |

---

## Description:
Gets the internal value of the `GlideDuration` `object`.

`GlideDuration` `objects` store the duration as a date adn time from January 1, 1970 00:00:00.

---

```js
var dar = new GlideDuration('3 12:00:00');

gs.info(dur.getValue());
```

---

[ServiceNow Docs]()