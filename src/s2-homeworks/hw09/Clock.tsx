import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );
  const [timerId, setTimerId] = useState<number | undefined>(undefined);

  const start = () => {
    // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    setTimerId(+intervalId);
  };

  const stop = () => {
    // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
    clearInterval(timerId);
    setTimerId(undefined);
  };

  const onMouseEnter = () => {
    // пишут студенты // показать дату если наведена мышка
    setShow(true);
  };
  const onMouseLeave = () => {
    // пишут студенты // спрятать дату если мышка не наведена
    setShow(false);
  };

  //LONG WAY
  //new Date().getHours().toString().padStart(2, "0") +
  //   ":" +
  //   new Date().getMinutes().toString().padStart(2, "0") +
  //   ":" +
  //   new Date().getSeconds().toString().padStart(2, "0")
  ///SHORT WAY
  //new Date().toLocaleTimeString('en-US', {hour12: false})

  // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringTime =
    date.toLocaleTimeString("en-US", { hour12: false }) || "date->time";
  // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
  const stringDate =
    date.toLocaleDateString("en-GB").split("/").join(".") || "date->date";

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
  const stringDay =
    date.toLocaleString("en-US", { weekday: "long" }) || "date->day";
  const stringMonth =
    date.toLocaleString("en-US", { month: "long" }) || "date->month";

  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              {" "}
              <span id={"hw9-date"}>{stringDate}</span>,{" "}
              <span id={"hw9-month"}>{stringMonth}</span>{" "}
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          id={"hw9-button-start"}
          disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={timerId ? false : true} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;
