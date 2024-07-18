const clock = document.querySelector(".clock");

//function for digital clock
const tick = () => {
  //new date
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `;
  clock.innerHTML = html;
};

//calling function over and over again
setInterval(tick, 1000);
