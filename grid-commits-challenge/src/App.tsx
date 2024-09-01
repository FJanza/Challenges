import "./App.css";
import {Day, commitsData} from "./service/fetchData";
import {commitColor, getOpacity} from "./utils/utils";

function App() {
  const data = commitsData;

  const opacities = [0.1, 0.3, 0.5, 0.8, 1];

  return (
    <div className="flex felx-row justify-center">
      <div className="flex flex-col items-end gap-4">
        <div
          className="grid grid-flow-col gap-1 "
          style={{
            gridTemplateRows: `repeat(${data[0].length + 1}, auto)`,
            gridTemplateColumns: `repeat(${data.length}, auto)`,
          }}
        >
          <span />
          {data[0].map((day: Day, i: number) => (
            <span
              key={day.date.toISOString()}
              style={{color: i % 2 == 0 ? "transparent" : "", fontSize: "12px"}}
            >
              {day.date.toLocaleString("en-GB", {weekday: "short"})}
            </span>
          ))}
          {data.map((week: Day[], index: number) => [
            <span
              key={index}
              style={{
                color: index % 4 == 0 ? "" : "transparent",
                fontSize: "13px",
              }}
            >
              {week[0].date.toLocaleString("en-GB", {
                month: "short",
              })}
            </span>,
            week.map((day) => (
              <span
                key={String(day.date)}
                className="w-4 h-4 tooltip"
                style={{
                  backgroundColor: commitColor,
                  opacity: getOpacity(day.value),
                }}
              >
                <span className="tooltiptext">
                  {day.value} commits{" "}
                  {day.date.toLocaleString("en-GB", {day: "numeric"})}/
                  {day.date.toLocaleString("en-GB", {month: "numeric"})}
                </span>
              </span>
            )),
          ])}
        </div>
        <div className="flex flex-row items-center gap-1">
          <span>Less</span>
          {opacities.map((value: number, index: number) => (
            <span
              key={index}
              className="w-3 h-3"
              style={{backgroundColor: commitColor, opacity: value}}
            ></span>
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default App;
