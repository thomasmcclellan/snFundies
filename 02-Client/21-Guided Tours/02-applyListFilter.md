##### 7/28/2020
# `applyListFilter(filter_func)`
## Parameter(s):
| Name | Type | Description |
|---|---|---|
| filter_func | `function` | Filter `function` that takes a single tour `object` from the `tour[]` `array` returned from `getAllTours()` method. |

---

## Description:
Sets a `function` to retrieve filtered tour results when the `getAllTours()` method is called.

Complete signature includes `top.NOW.guided_tours.api` preceding the method name.

---

```js
//create a filter function
var filtFunction = function(tour) {
   //only return those tours whose name starts with ‘my’
   return tour.name.indexOf(‘my’) === 0);
}

//apply the filter 
top.NOW.guided_tours.api.applyListFilter (filtFunction);

//call the getAllTours method to observe the filtered tours
top.NOW.guided_tours.api.getAllTours (function(er, tours) {
  if(!er) {
    console.log(‘The filtered tours are: ‘);
    console.log(tours);
  }
});
```

---

[ServiceNow Docs](https://developer.servicenow.com/dev.do#!/reference/api/newyork/client/guided_toursAPI#GT-applyListFilter_F)