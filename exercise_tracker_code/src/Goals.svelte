<script>
    export let Goals;

    class goal{
        constructor(exercise, lbs, achieved){
            this.exercise = exercise;
            this.lbs = lbs;
            this.achieved = false;
        }
    };

    function addGoal(){
        Goals[Goals.length] = new goal(document.getElementById("qGoalText").value, document.getElementById("qGoalWeight").value);
        document.getElementById("qGoalText").value = "";
        document.getElementById("qGoalWeight").value = "";
        console.log(Goals)

        document.getElementById("topGoalMessage").textContent = "Goal Entered";
        setTimeout(updateGoalMessage, 3500);
    }

    function updateGoalMessage(){
        document.getElementById("topGoalMessage").textContent = "Write A Goal";
    }
</script>

<div class = "workoutData" id = "wDEntry">
    <p id = "topGoalMessage" style="font-weight: 500;">Enter Goals Below</p>
    <div id = "qGoal">
        <input class = "q" id = "qGoalText" type="text" size = 10 placeholder="Write A Goal"/>
        <input class = "q" id = "qGoalWeight" type="number" size = 3 placeholder="lbs"/>
    </div>
    <button on:click = {addGoal}>Add Goal</button>
</div>