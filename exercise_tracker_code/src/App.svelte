<script>
  import WorkoutData from './WorkoutData.svelte'
  import GraphData from './GraphData.svelte'
  import Calendar from './Calendar.svelte';
  import GoalData from './Goals.svelte';
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

  class goal{
        constructor(exercise, lbs, achieved){
            this.exercise = exercise;
            this.lbs = lbs;
            this.achieved = false;
        }
    };

  let Workouts = [new workout(23, 9, 2024, [new exercise("Squat", 4, 10, 135), new exercise("Leg Press", 4, 12, 200), new exercise("RDL", 4, 10, 135),new exercise("Hip Thrust", 4, 10, 180)], "General weakness in legs"),
  new workout(20, 9, 2024, [new exercise("Bench", 4, 8, 100), new exercise("Dumbbell Row", 4, 12, 50), new exercise("Incline Press", 4, 10, 40),new exercise("Bicep Curls", 4, 15, 25)], "Tired"),
  new workout(18, 9, 2024, [new exercise("Deadlift", 4, 6, 185), new exercise("Lunges", 4, 12, 40), new exercise("Split Squats", 4, 12, 30),new exercise("Calf Raises", 4, 12, 200)], ""),
  new workout(16, 9, 2024, [new exercise("OHP", 4, 8, 75), new exercise("Dips", 4, 10, 200), new exercise("Lateral Raises", 4, 15, 15),new exercise("Chest Fly", 4, 12, 30)], "5k run after")];
  let Goals = [new goal("Leg Press", 175, true), new goal("Bench", 145, false), new goal("Squat", 215, false), new goal("Deadlift",270, false)];

  var a = 1;

  function clearData(){
    Workouts = [];
    Goals = [];
  }
</script>

<main>
  <div class = "quadLayout">
    <div class = "quadLayoutItem" ><WorkoutData {Workouts} {Goals}/></div>
    <div class = "quadLayoutItem ministack">
      <p class = "text">Welcome Skyler to your workout tracker!</p>
      <div>
        <p class = "text inlineText" id="Clock"></p>
        <p class = "text inlineText" id = "dayornight"></p>
      </div>
      <GoalData {Goals}/>
    </div>
  <div class = "quadLayoutItem" ><GraphData {Workouts} {Goals}/></div>
  <div class = "quadLayoutItem" ><Calendar {Workouts}/></div>
</div>
<button class = "DeleteButton" on:click={clearData}>Clear All Sample Data</button>
</main>