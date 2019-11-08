##### 11/04/2019
# `GlideDuration()`
## Overview: 
The scoped `GlideDuration` class provides methods for working with spans of time or durations.

`GlideDuration` objects store the duration as a date and time from January, 1, 1970, 00:00:00 UTC.  As a result, `setValue()` and `getValue()` use the scoped `GlideDateTime` object for parameters and return values.

---

# `GlideDuration(another)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| another | `GlideDuration` | Another scoped `GlideDuration` `object`. |

---

## Description:
Instantiates a `GlideDuration` `object` by cloning the value of another `GlideDuration` `object`.

---

# `GlideDuration(milliseconds)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| milliseconds | `number` | The duration value in milliseconds. |

---

## Description:
Instantiates a `GlideDuration` `object` with the specified duration.

---

# `GlideDuration(displayValue)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| displayValue | `string` | The display value. |

---

## Description:
Instantiates a `GlideDuration` `object` with the specified display value.

---

[ServiceNow Docs](https://developer.servicenow.com/app.do#!/api_doc?v=newyork&id=c_GlideDurationScopedAPI)