const getElement = (query) => {
  return document.querySelector(`${query}`);
};

const mode = getElement(".wrapper");
const modeClasses = mode.classList;
const container = getElement(".container");
const progressBar = getElement("#progress_bar");
const toggler = getElement(".toggler");
if (toggler.checked) {
  modeClasses.add("dark_mode");
}
const handleMode = () => {
  if (toggler.checked) {
    modeClasses.add("dark_mode");
    modeClasses.remove("light_mode");
  } else {
    modeClasses.remove("dark_mode");
    modeClasses.add("light_mode");
  }
};

const ProgressBarAnimation = () => {
  let scroller = container.getBoundingClientRect();

  let clientHeight = document.documentElement.clientHeight;

  //   let clientHeight = document.body.clientHeight;

  let scrollDistance = -scroller.top;
  let progressDistance =
    (scrollDistance / (scroller.height - clientHeight)) * 100;

  let value = Math.floor(progressDistance);
  progressBar.style.width = `${value <= 0 ? 0 : value}%`;
};

window.addEventListener("scroll", ProgressBarAnimation);
