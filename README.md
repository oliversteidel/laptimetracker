# Lap Time Tracker

## This is a tool for car racing game enthusiasts!
Since most of the car racing video games only list your fastest laptime among other players,<br>
you can use this tool to list your own laptimes on different racetracks, so you can compare your favourite cars, <br>
or different setups of one car on a racetrack.<br>

---
## How to use:
### 1. Create a new racetrack
* hit the <strong>New Track</strong> button and type in the name of the racetrack
* <strong>Note:</strong> you can't add the same track name twice, but it's not case sensitive 
* a new button for the created racetrack will appear, click it to get to the track menu
### 2. Create a new laptime
* select the <strong>New Time</strong> button and fill in the form
* <strong>Note:</strong> car name and laptime are required fields
* <strong>Important:</strong> the laptime must have the format <strong>00:00,000</strong> to calculate the time intervals correctly
    * if your laptime is quicker than 10 minutes, you have to type a <strong>0</strong> first ( e.g. " 03:15,687 " )
    * by typing in the numbers, the colon ( <strong>:</strong> ) and the comma ( <strong>,</strong> ) are inserted automatically 
* hit the <strong>Add Time</strong> button 
    * your entries will be sorted by quickest laptime
    * each time interval will be calculated again by adding a new laptime
### 3. Delete a racetrack or laptime
* select the <strong>Delete Mode</strong> button and click the item you like to delete
* if you delete a racetrack, your laptimes set in this track are deleted too
<br><br>
### This app uses the local storage of your browser to save your entries
* by adding a track / laptime or deleting one, your entries will be saved automatically 
* make sure to <strong>disable</strong> “Keep local data only until I quit my browser” in your browser settings<br>
or add an exception for this URL
<br>
---

## Technologies used
* Vue.js
* Sass
* [uuid](https://www.npmjs.com/package/uuid)


 
