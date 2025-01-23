const switchElement = document.getElementById("switch-element");
const switchBase = document.getElementById("switch-base");
const switchBall = document.getElementById("switch-ball");

const init = () => {
  if (switchElement.checked) {
    switchBase.classList.remove("on");
    switchBase.classList.add("off");
    switchBall.classList.remove("ball-on");
    switchBall.classList.add("ball-off");
    return;
  }

  switchBase.classList.remove("off");
  switchBase.classList.add("on");
  switchBall.classList.remove("ball-off");
  switchBall.classList.add("ball-on");
};

const handleClick = () => {
  if (switchElement.checked) {
    switchBase.classList.remove("on");
    switchBase.classList.add("off");
    switchBall.classList.remove("ball-on");
    switchBall.classList.add("ball-off");
    return;
  }

  switchBase.classList.remove("off");
  switchBase.classList.add("on");
  switchBall.classList.remove("ball-off");
  switchBall.classList.add("ball-on");
};

init();
