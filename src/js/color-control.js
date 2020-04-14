import colors from './arr-colors';
import refs from './refs';
import randomIntegerFromInterval from './random';

const startBtn = refs.startButtonRef;
const stopBtn = refs.stopButtonRef;
const bodyBtn = refs.bodyRef;

let timerId = null;

const setColor = () => {
  timerId = setInterval(() => {
    const colorNumber = randomIntegerFromInterval(0, colors.length - 1);
    bodyBtn.setAttribute('style', `background-color: ${colors[colorNumber]};`);
  }, 1000);
  startBtn.setAttribute('disabled', 'true');
  startBtn.removeEventListener('click', setColor);
  stopBtn.removeAttribute('disabled');
};

const stopSetCollor = () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  startBtn.addEventListener('click', setColor);
  bodyBtn.removeAttribute('style');
  stopBtn.setAttribute('disabled', 'true');
};

stopBtn.setAttribute('disabled', 'true');
startBtn.addEventListener('click', setColor);
stopBtn.addEventListener('click', stopSetCollor);
