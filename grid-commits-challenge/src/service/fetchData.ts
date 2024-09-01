export interface Week {
  total: number;
  week: number;
  days: number[];
}

export interface Day {
  date: Date;
  value: number;
}

const requestOptions: RequestInit = {
  method: "GET",
  redirect: "follow",
};

const data = await fetch(
  "https://api.github.com/repos/facebook/react/stats/commit_activity",
  requestOptions
)
  .then((response) => response.json())
  .catch((error) => console.error(error));

export const commitsData = data.map((week: Week) => {
  return week.days.map((value, indexDay) => {
    const dateOfDay = new Date((week.week + indexDay * 24 * 60 * 60) * 1000);
    return {
      date: dateOfDay,
      value: value,
    };
  });
});
