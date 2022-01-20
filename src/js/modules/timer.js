const timer = (id, deadline) => {
  const getTimeRemaining = endtime => {
    const time = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor((time / 1000) % 60),
          minutes = Math.floor((time / (1000 * 60)) % 60),
          hours = Math.floor((time / (1000 * 60 * 60)) % 24),
          days = Math.floor((time / (1000 * 60 * 60 * 24)));

    return {
      total: time,
      seconds,
      minutes,
      hours,
      days
    };
  };

  const addZero = num => {
    if (num <= 9) {
      return '0' + num;
    }
    else {
      return num;
    }
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector),
          seconds = document.getElementById('seconds'),
          minutes = document.getElementById('minutes'),
          hours = document.getElementById('hours'),
          days = document.getElementById('days'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endTime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

export default timer;