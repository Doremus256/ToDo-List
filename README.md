# 05 Third-Party APIs: Work Day Scheduler

Brad Doremus
GitHub: https://github.com/Doremus256/ToDo-List
Live Site: https://doremus256.github.io/ToDo-List/

For this assignment we were tasked with creating a Day Planner. 

The HTML is pretty straight-forward, with new Divs representing each hour in the day, all with the same class and with corresponding id's so that my JS can hook into individual hours' textarea and apply relevant effects. 

For the JS, my for-loop ran through each div with id based on the hour, and compared to Moment.JS to determine whether each text area was before or after (greater than or less than) the current time. The current time is in military time, so I had to change the ID's in the HTML to match (1pm = 13, 2pm = 14, etc). Also, since Moment.JS pulls military time in a weird format, I used parseInt to change the time to a single intiger, which can then be compared to each hour's textarea's ID (8 for 8:00am, all the way t0 17 for 5:00pm)

Finally, to save to local storage I used localStorage.setItem to its inputted value. 

Similar to the last homework, I am looking forward to coming back to this assignment later when I am more polished, and creating a better application. 

This is the best I could do for now. 

Thank You!


