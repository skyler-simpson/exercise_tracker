<script>
    import { onMount } from "svelte";
    import WorkoutData from "./WorkoutData.svelte";
  
    export let Workouts;
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
  
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let daysInMonth = [];
  
    // Get the number of days in a month
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
  
    // Get the first day of the month (0 = Sunday, 1 = Monday, ...)
    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }
  
    // Generate the calendar days
    function generateCalendarDays() {
        daysInMonth = [];
        let totalDays = getDaysInMonth(currentYear, currentMonth);
        let firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  
        // Fill empty slots before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            daysInMonth.push(null);
        }
  
        // Fill the days of the current month
        for (let i = 1; i <= totalDays; i++) {
            daysInMonth.push(i);
        }
    }
  
    // Move to the next month
    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        }
        else {
            currentMonth++;
        }
        generateCalendarDays();
    }
  
    // Move to the previous month
    function prevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } 
        else {
            currentMonth--;
        }
      generateCalendarDays();
    }
  
    // Initialize the calendar when the component mounts
    onMount(() => {
        generateCalendarDays();
    });

    function loadPastData(currD, currM, currY){
        for(let index = 0; index < Workouts.length; index++){
            let pastWO = Workouts[index];
            if (pastWO.day == currD && pastWO.month == currM && pastWO.year == currY){
                //fill in the data
                document.getElementById("q1").value = pastWO.exercises[0].name;
                document.getElementById("q2").value = pastWO.exercises[0].sets;
                document.getElementById("q3").value = pastWO.exercises[0].reps;
                document.getElementById("q4").value = pastWO.exercises[0].lbs;
                document.getElementById("q5").value = pastWO.exercises[1].name;
                document.getElementById("q6").value = pastWO.exercises[1].sets;
                document.getElementById("q7").value = pastWO.exercises[1].reps;
                document.getElementById("q8").value = pastWO.exercises[1].lbs;
                document.getElementById("q9").value = pastWO.exercises[2].name;
                document.getElementById("q10").value = pastWO.exercises[2].sets;
                document.getElementById("q11").value = pastWO.exercises[2].reps;
                document.getElementById("q12").value = pastWO.exercises[2].lbs;
                document.getElementById("q13").value = pastWO.exercises[3].name;
                document.getElementById("q14").value = pastWO.exercises[3].sets;
                document.getElementById("q15").value = pastWO.exercises[3].reps;
                document.getElementById("q16").value = pastWO.exercises[3].lbs;
                document.getElementById("q17").value = pastWO.comments;
                console.log("Past");
                console.log(pastWO);
                console.log(document.getElementById("q1").value);
                //set the hidden values
                document.getElementById("ISUPDATE").value = 1;
                document.getElementById("UPDATEDAY").value = currD;
                document.getElementById("UPDATEMONTH").value = currM;
                document.getElementById("UPDATEYEAR").value = currY;
            }
        }
    }
  </script>
  
  <div class="calendar-header">
    <button on:click={prevMonth}>Previous</button>
    <h2>{currentYear} - {currentMonth + 1}</h2>
    <button on:click={nextMonth}>Next</button>
  </div>
  
  <div class="calendar">
    {#each daysOfWeek as day}
        <div class="day ofWeeks">{day}</div>
    {/each}
  
    {#each daysInMonth as day}
      {#if day === null}
        <div class="day empty"></div>
      {:else}
        <button class="day" on:click={loadPastData(day, currentMonth+1, currentYear)}>{day}</button>
      {/if}
    {/each}
  </div>