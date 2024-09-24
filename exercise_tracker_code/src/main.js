import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app

function updateTime() {
  const now = new Date();
  const hour = now.getHours() > 12 ? (now.getHours()-12).toString() : now.getHours().toString();
  const padding = now.getMinutes() > 9 ? "" : "0";
  const minute = now.getMinutes().toString();
  const minuteTime = padding + minute;
  const timeString = hour + ":" + minuteTime;
  document.getElementById('Clock').textContent = timeString;

  let meridian;
  if(now.getHours() > 12){
    meridian = " PM";
  }
  else{
    meridian = " AM";
  }
  document.getElementById("dayornight").textContent = meridian;
}

updateTime();
setInterval(updateTime, 60000);