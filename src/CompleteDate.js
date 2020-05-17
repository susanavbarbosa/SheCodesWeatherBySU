import React from "react";

export default function CompleteDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = props.date.getFullYear();
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[props.date.getMonth()];
  let day = props.date.getDate();
  if (day < 10) {
    day = `0${day}`;
  }

  return (
    <div>
      {weekday}, {day}/{month}/{year}, {hours}h{minutes}
    </div>
  );
}
