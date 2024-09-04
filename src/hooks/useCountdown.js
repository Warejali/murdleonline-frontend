/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function useCountDown() {
  const initialCountdownSettings = {
    timeleft: '',
  };

  const [countdownSettings, setCountdownSettings] = useState(
    JSON.parse(localStorage.getItem('countdownDate')) || {
      ...initialCountdownSettings,
    }
  );
  const [countdownTimer, setCountdownTimer] = useState(null);
  const [countDownStatus, setCountDownStatus] = useState(false);

  useEffect(() => {
    let timer = null;
    if (countdownSettings.timeleft)
      timer = setInterval(() => playTimer(countdownSettings.timeleft), 1000);

    localStorage.setItem('countdownDate', JSON.stringify(countdownSettings));
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, [countdownSettings.timeleft]);

  function playTimer(currentUnixEndDate) {
    const distance = currentUnixEndDate - moment().format('X');

    if (distance > 0) {
      setCountdownTimer({
        hours: parseInt((distance % (60 * 60 * 24)) / (60 * 60), 10),
        mins: parseInt((distance % (60 * 60)) / 60, 10),
        secs: parseInt(distance % 60, 10),
      });
      setCountDownStatus(true);
    } else {
      setCountDownStatus(false);
      setCountdownSettings({ ...initialCountdownSettings });
      setCountdownTimer(null);
    }
  }

  function clearCountdown() {
    setCountDownStatus(false);
    setCountdownSettings({ ...initialCountdownSettings });
    setCountdownTimer(null);
  }

  function handleStartCountdown(gameId) {
    var d = moment().startOf('day').add(1, 'days');

    let timeleft = Number(
      moment(
        `${d.format('MM-DD-YYYY')} ${d.format('hh:mm')} ${d.format('A')}`,
        'MM-DD-YYYY hh:mm A'
      ).format('X')
    );

    setCountdownSettings((prevCountdownSettings) => {
      return {
        ...prevCountdownSettings,
        timeleft,
        gameId,
      };
    });
  }

  return {
    clearCountdown,
    handleStartCountdown,
    countdownSettings,
    countdownTimer,
    countDownStatus,
  };
}
//   return (
//     <React.Fragment>
//       <button
//         type='button'
//         className='button header-button settings'
//         onClick={handleStartCountdown}
//       >
//         Settings
//       </button>
//       <main>
//         {countdownSettings.timeleft && !countdownTimer ? (
//           <LoadingSpinner />
//         ) : countdownTimer ? (
//           <>
//             <div className='countdown-value'>{countdownTimer.hours}</div>
//             <div className='countdown-value'>{countdownTimer.minutes}</div>
//             <div className='countdown-value'>{countdownTimer.seconds}</div>
//           </>
//         ) : (
//           <InfoMessage countDownStatus={countDownStatus} />
//         )}
//       </main>
//     </React.Fragment>
//   );
// };

// export default App;
