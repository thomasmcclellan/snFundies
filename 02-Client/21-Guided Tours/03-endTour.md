##### 7/29/2020
# `endTour()`
## Description:
Stops a currently playing tour.  This method silently exists if no tours are playing.

Complete signature includes `top.NOW.guided_tours.api` preceding the method name.

---

```js
//create a callback function to end the tour if it starts correctly
var cbFunction = function(err) {
	if (err) {
   console.log(‘Error Occurred’);
}
	else {
	   // tour has started so we can call endTour
	   top.NOW.guided_tours.api.endTour();
}
}

//calling the startTour method so that we can end the tour as soon as it starts
top.NOW.guided_tours.api.startTour('a297e04b732313007077edcc5ef6a780', 2, cbFunction);
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/guided_toursAPI#GT-endTour)