<script>
    import './app.css'
    class workout{
        constructor(day, month, year, exercise, comments){
            this.day = day;
            this.month = month;
            this.year = year;
            this.exercises = exercise;
            this.comments = comments;
        }
    };

    class exercise{
        constructor(name, sets, reps, lbs){
            this.name = name;
            this.sets = sets;
            this.reps = reps;
            this.lbs = lbs;
        }
    };

    export let Workouts;
    export let Goals;

    var count = 0

    function inputWorkoutData(){
        var inputDate = new Date();
       
        var exercise1 = new exercise(document.getElementById("q1").value, document.getElementById("q2").value, document.getElementById("q3").value, document.getElementById("q4").value);
        var exercise2 = new exercise(document.getElementById("q5").value, document.getElementById("q6").value, document.getElementById("q7").value, document.getElementById("q8").value);
        var exercise3 = new exercise(document.getElementById("q9").value, document.getElementById("q10").value, document.getElementById("q11").value, document.getElementById("q12").value);
        var exercise4 = new exercise(document.getElementById("q13").value, document.getElementById("q14").value, document.getElementById("q15").value, document.getElementById("q16").value);

        if(document.getElementById("ISUPDATE").value != 1){
            Workouts[Workouts.length] =  new workout(inputDate.getDate(), inputDate.getMonth()+1, inputDate.getFullYear(), [exercise1, exercise2, exercise3, exercise4],document.getElementById("q17").value);
            document.getElementById('topMessage').textContent = "Workout Added";
        }
        else{
            for (let index = 0; index < Workouts.length; index++){
                let uD = document.getElementById("UPDATEDAY");
                let uM = document.getElementById("UPDATEMONTH");
                let uY = document.getElementById("UPDATEYEAR");
                if(Workouts[index].day == uD && Workouts[index].day == uM && Workouts[index].day == uY){
                    //not working correctly in here
                    Workouts[index] = new workout(uD, uM, uY, [exercise1, exercise2, exercise3, exercise4], document.getElementById("q17").value);
                    document.getElementById('topMessage').textContent = "Workout Updated";
                }
            }
        }

        for (let i = 1; i <14; i+=4){
            let exerciseName = document.getElementById("q"+i).value;
            let exerciseWeight = document.getElementById("q"+(i+3)).value;

            for(let x = 0; x < Goals.length; x++){
                if(Goals[x].exercise == exerciseName && Goals[x].lbs <= exerciseWeight && !Goals[x].achieved){
                    window.alert("You surpassed you " + exerciseName + " goal of " + Goals[x].lbs + "lbs by lifting " + exerciseWeight +"lbs .");
                    Goals[x].achieved = true;
                }
            }
        }

        for (let i = 1; i <= 17; i++){
            document.getElementById("q"+i).value = '';
        }
        document.getElementById("ISUPDATE").value = '';
        document.getElementById("UPDATEDAY").value = '';
        document.getElementById("UPDATEMONTH").value = '';
        document.getElementById("UPDATEYEAR").value = '';


        console.log(Workouts);

        
        setTimeout(updateMessage, 3500);
    }

    function updateMessage(){
        document.getElementById("topMessage").textContent = "Enter Workout Data Below";
    }
    function test(){}
</script>

<div class = "workoutData" id = "wDEntry">
    <p id = "topMessage" style="font-weight: 500;">Enter Workout Data Below</p>
    <!--each exercise will have 4 inputs-->
    <!--4 exercises per workout for now-->
    <div id = "q1_div">
        <input class = "q" id = "q1" type="text" size = 10 placeholder="Exercise"/>
        <p class = "q">:</p>
        <input class = "q" id = "q2" type="number" size = 10 placeholder="Sets"/>
        <p class = "q">x</p>
        <input class = "q" id = "q3" type="number" size = 3 placeholder="Reps"/>
        <p class = "q">@</p>
        <input class = "q" id = "q4" type="number" size = 4 placeholder="lbs"/>
    </div>
    <div id = "q2_div">
        <input class = "q" id = "q5" type="text" size = 10 placeholder="Exercise"/>
        <p class = "q">:</p>
        <input class = "q" id = "q6" type="number" size = 10 placeholder="Sets"/>
        <p class = "q">x</p>
        <input class = "q" id = "q7" type="number" size = 3 placeholder="Reps"/>
        <p class = "q">@</p>
        <input class = "q" id = "q8" type="number" size = 4 placeholder="lbs"/>
    </div>
    <div id = "q3_div">
        <input class = "q" id = "q9" type="text" size = 10 placeholder="Exercise"/>
        <p class = "q">:</p>
        <input class = "q" id = "q10" type="number" size = 10 placeholder="Sets"/>
        <p class = "q">x</p>
        <input class = "q" id = "q11" type="number" size = 3 placeholder="Reps"/>
        <p class = "q">@</p>
        <input class = "q" id = "q12" type="number" size = 4 placeholder="lbs"/>
    </div>
    <div id = "q4_div">
        <input class = "q" id = "q13" type="text" size = 10 placeholder="Exercise"/>
        <p class = "q">:</p>
        <input class = "q" id = "q14" type="number" size = 10 placeholder="Sets"/>
        <p class = "q">x</p>
        <input class = "q" id = "q15" type="number" size = 3 placeholder="Reps"/>
        <p class = "q">@</p>
        <input class = "q" id = "q16" type="number" size = 4 placeholder="lbs"/>
    </div>
    <div id = "q5_div">
        <input class = "q" id = "q17" type = "text" placeholder="Comments"/>
    </div>
    <input type = "hidden" id = "ISUPDATE" value = 0/>
    <input type = "hidden" id = "UPDATEDAY" value = 0/>
    <input type = "hidden" id = "UPDATEMONTH" value = 0/>
    <input type = "hidden" id = "UPDATEYEAR" value = 0/>
    <button on:click = {inputWorkoutData}>Add Workout</button>
</div>