##### 7/30/2020
# `events.off(event_name, listener_function?)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| event_name | `string` | Event name to be removed from the listener. * |
| listener_function (**Optional**) | `function` | If provided, specified listener `function` is removed from remaining event listeners attached with that event.  If not provided, all listener `functions` attached to that event are removed. |

  > *Value event names:
  >   * `stepStarted`
  >   * `tourStarted`
  >   * `tourEnded`
  >   * `tourCompleted`
  >   * `tourFailed`
  >   * `tourAbandoned`

---

## Description:
Removes an existing event listener.

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

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/guided_toursAPI#GT-events.off_S_F)