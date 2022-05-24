import React, { useState, useRef } from "react";

import { add, format, sub, differenceInHours } from "date-fns";
import addWeeks from "date-fns/addWeeks";
import { ko } from "date-fns/locale";
import { format as timezoneFormat } from "date-fns-tz";

export default function DateFnsExample() {
  const dateFnsDate = new Date();
  const newDatefnsjsDate = add(dateFnsDate, { weeks: 1 });
  const newDatefnsjsDate2 = addWeeks(newDatefnsjsDate, 1);

  const [day, setDay] = useState();
  const birthDayRef = useRef(null);
  const handleBirthDayChange = (event) => {
    setDay(format(new Date(event.target.value), "EEEE", { locale: ko }));
  };

  return (
    <div>
      <h1>Date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, "yyyy-MM-dd")}
        <br />
        {format(newDatefnsjsDate, "yyyy-MM-dd")}
        <br />
        {format(newDatefnsjsDate2, "yyyy-MM-dd")}
        <br />
        <br />
        <div>Summer Time (New-york) </div>
        {/* <div>{dayjs.tz.guess()}</div> */}
        <div>
          2018년 3월 10일 13시에 하루 더하기 :
          {timezoneFormat(
            add(new Date("2018-03-10 13:00:00"), {
              days: 1,
            }),
            "yyyy-MM-dd HH:mm:ssXXX",
            { timeZone: "America/New_York" }
          )}
        </div>
        <div>2018sus 3월 10일 13시에 24시간 더하기 :</div>
        {timezoneFormat(
          add(new Date("2018-03-10 13:00:00"), {
            hours: 24,
          }),
          "yyyy-MM-dd HH:mm:ssXXX",
          { timeZone: "America/New_York" }
        )}
        <br />
        <br />
        <div>Leap Year(Korea)</div>
        <div>
          2017년 1월 1일에 1년 빼기 :
          {format(sub(new Date("2017-01-01"), { years: 1 }), "yyyy-MM-dd")}
        </div>
        <div>
          2017년 1월 1일에 365일 빼기 :
          {format(sub(new Date("2017-01-01"), { days: 365 }), "yyyy-MM-dd")}
        </div>
        <br />
        <br />
        <div>한국어로 표기</div>
        {/* <div>{format(sub("2017-01-01", { day: 1 }), "yyyy-MM-dd")}</div> */}
        {format(new Date("2017-01-01"), "yyyy년-M월-dd일", { locale: ko })}
        <br />
        <br />
        <div>자기 생일 요일 찾기</div>
        <div>
          <input
            type="date"
            ref={birthDayRef}
            onChange={handleBirthDayChange}
          />
          <div>무슨 요일이었을까</div>
          <div>{day}</div>
        </div>
        <br />
        <br />
        <div>두 날짜 비교</div>
        <div>2021-07-17 03:00 와 2021-07-18 02:00는 몇시간 차이인가?</div>
        <div>
          {`${differenceInHours(
            new Date("2021-07-17 03:00"),
            new Date("2021-07-18 02:00")
          )} 시간`}
        </div>
      </div>
    </div>
  );
}
