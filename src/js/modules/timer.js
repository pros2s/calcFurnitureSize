const timer = (id, deadline) => {
  //function to calculate time
  const getTimeRemaining = endtime => {
    const time = Date.parse(endtime) - Date.parse(new Date()),//deadline date minus current date
          seconds = Math.floor((time / 1000) % 60),
          minutes = Math.floor((time / (1000 * 60)) % 60),
          hours = Math.floor((time / (1000 * 60 * 60)) % 24),
          days = Math.floor((time / (1000 * 60 * 60 * 24)));

    //returns object with time date
    return {
      total: time,
      seconds,
      minutes,
      hours,
      days
    };
  };

  //Beauty for digints
  const addZero = num => {
    if (num <= 9) {
      return '0' + num;
    }
    return num;
  };

  const setClock = (selector, endTime) => {
    const //timer = document.queryselector(selector),
          seconds = document.getElementById('seconds'),//timer.queryselector('#seconds'),
          minutes = document.getElementById('minutes'),//timer.queryselector('#minutes'),
          hours = document.getElementById('hours'),//timer.queryselector('#hours'),
          days = document.getElementById('days'),//timer.queryselector('#days'),
          timeInterval = setInterval(updateClock, 1000);

    //this call for no waiting 1sec before timer starts work
    updateClock();

    function updateClock() {
      //object returns from getTimeRemaing()
      const t = getTimeRemaining(endTime);

      //Time visibility
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      //when deadline is over
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