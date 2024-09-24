<script>
    export let Workouts;
    export let Goals;

    let widthOfGraph = 400;

    let progress = new Map();
    let mapTotal = new Map();
    let mapCurr = new Map();
   
    let pointsForGraph = [];

    let gap = [];
    function updateGraph(){
        console.log("update");
        for (let i = 0; i < Goals.length; i++){
            progress.set(Goals[i].exercise, []);
            mapTotal.set(Goals[i], 0);
            mapCurr.set(Goals[i], 0);
            console.log(progress);
        }

        for (let i = 0; i < Workouts.length; i++){
            let individualWorkout = Workouts[i];
            for (let x = 0; x < 4; x++){
                if(progress.has(individualWorkout.exercises[x].name)){
                    let valueToAdd = progress.get(individualWorkout.exercises[x].name);
                    valueToAdd[valueToAdd.length] = individualWorkout.exercises[x].lbs;
                    progress.set(individualWorkout.exercises[x].name, valueToAdd);
                }
            }
        }

        for (let i = 0; i < Goals.lenght; i++){
            let exerciseString = "";

            let currGoal = Goals[i];
            let nums = progress.get(Goals[i])

            let spacing = widthOfGraph/nums.lenght;

            for (let x = 0; x < nums.length; x++){
                let xVal = 50 + spacing*x;
                let yVal = nums[x];
                exerciseString += xVal + "," + yVal + " ";
            }
            pointsForGraph[pointsForGraph.length] = exerciseString;
        }

    }
</script>

<svg id = "progressGraph" width = {widthOfGraph} height = "500" on:click={updateGraph}>
    <!--<polyline points = "0,0 50,100 300,200 150,50"/>-->
    {#each pointsForGraph as eData}
        <polyline points = {eData}/>
    {/each}


</svg>