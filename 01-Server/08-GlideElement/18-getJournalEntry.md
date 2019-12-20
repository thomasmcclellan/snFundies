##### 12/17/2019
# `getJournalEntry(mostRecent)`

## Parameter(s):
| Name | Type | Description |
|---|---|---|
| mostRecent | `number` | If 1, returns the most recent entry; if -1, returns all journal entries. |

## Return value:
| Type | Description |
|---|---|
| `string` | For the most recent entry, returns a `string` that contains the field label, and user display name of the journal entry.<br>For all journal entries, returns the same information for all journal entries ever entered as a single `string` with each entry delimited by `'\n\n'`. |

---

## Description:
Returns either the most recent journal entry or all journal entries.

---

```js
// Gets all journal entries as a string where each entry is delimited by '\n\n'
var notes = current.work_notes.getJournalEntry(-1);
// Stores each entry into an array of strings
var na = notes.split('\n\n');

for (var note in na) {
  gs.print(na[note]);
}
```

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=SGE-getJournalEntry_N)