import React, { useEffect, useState } from "react";
import "../App.css";

const Countdown = () => {
  const [step, setStep] = useState(0);
  const [start, setStart] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [timerTime, setTimerTime] = useState(0);
  const [seconds, setSeconds] = useState(("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2));
  const [minutes, setMinutes] = useState(("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2));
  const [hours, setHours] = useState(("0" + Math.floor(timerTime / 3600000)).slice(-2));

  useEffect(() => {
    setSeconds(("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2));
    setMinutes(("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2));
    setHours(("0" + Math.floor(timerTime / 3600000)).slice(-2));
  }, [timerTime]);

  useEffect(() => {
    if(step === 1) {
      setTimerOn(true);
      setTimerTime(timerTime);
      setTimerStart(Date.now() - timerTime);
      var intervalId = setInterval(() => {
        setTimerTime(Date.now() - timerStart);
      }, 10);
      return () => clearInterval(intervalId); 
    } else {
      setTimerTime(0);
      setTimerOn(false);
      setTimerStart(0);
    }
  }, [timerStart, step]);

  const startTimer = () => {
    setStart(true);
  };


  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const preStep = () => {
    if(step > 0) setStep(step - 1);
  };

  return (
    !start ?
      <button onClick={startTimer}>Start</button>
    :
      <div>
        <div>
          {step === 0 && <>This is popup step 1.</>}
          {step === 1 && <>{hours} : {minutes} : {seconds}</>}
          {step === 2 && <>The assignment is complete!</>}
        </div>
        <button onClick={preStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
        <button onClick={() => {setStart(false); setStep(0);}}>close</button>
      </div>
    );

};

export default Countdown;
