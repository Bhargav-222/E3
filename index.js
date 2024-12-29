function updateClock(){
  const now = new Date;
  
  let hour = now.getHours();
  let mm = hour>12?"PM":"AM";
  hour = hour%12||hour;
  hour=hour.toString().padStart(2,0);
  const minute = now.getMinutes().toString().padStart(2,0);
  const second = now.getSeconds().toString().padStart(2,0);
  const result = `${hour}:${minute}:${second} ${mm}`;
  document.getElementById("innerbox").textContent=result;
}
updateClock();
setInterval(updateClock,1000);