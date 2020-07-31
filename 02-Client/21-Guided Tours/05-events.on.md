##### 7/31/2020
# `events.on(event_name, listener_function)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| event_name | `string` | Event name to be attached to the listener. * |
| listener_function | `function` | Listener to be added. **NOTE**: clear any event listener after it solves its purpose. |
| listener_function.obj | `object` | Passed to `listener_function()` by each event in the format mentioned below. ** |

  > *Value event names:
  >   * `stepStarted`
  >   * `tourStarted`
  >   * `tourEnded`
  >   * `tourCompleted`
  >   * `tourFailed`
  >   * `tourAbandoned`
  >   * `tourDismissed`

  > **`listener_function()` parameters have this format:
  >   * For `stepStarted` events:
  >     `{ tour: '<tour_sys_id>', step: step_num }`
  >   * For all other events:
  >     `{ tour: '<tour_sys_id>' }`
  > `JSON` parameters:
  >   * `tour_sys_id`: `string`.  Guided tour ID from the Guided Tours `[sys_embedded_tour_guide]' table
  >   * `step_num`: `number`.  Value between 0 (first step) and _n_ (final step).

---

## Description:
Attaches an event listener to a guided tour events.

Complete signature includes `top.NOW.guided_tours.api` preceding the method name.

---

```js
//create a callback function to handle the result of the api call
var eventListenerTourStarted = function() {
   console.log(‘The tour has started’); 
}
var eventListenerTourEnded = function() {
   console.log(‘The tour has ended’); 
}

//attaching event listeners for tourStarted and tourEnded Events
top.NOW.guided_tours.events.on(‘tourStarted’,eventListenerTourStarted);
top.NOW.guided_tours.events.on(‘tourEnded’, eventListenerTourEnded);

…
//start a tour
top.NOW.guided_tours.api.startTour ('a297e04b732313007077edcc5ef6a780', 2, cbFunction);
//As soon as the tour starts the eventListenerTourStarted gets fired
…
top.NOW.guided_tours.api.endTour();
// eventListenerTourEnded gets fired

….

//removing the event listeners top.NOW.guided_tours.events.off(‘tourStarted’,eventListenerTourStarted);
top.NOW.guided_tours.events.off(‘tourEnded’, eventListenerTourEnded);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/guided_toursAPI#GT-events.on_S_F)