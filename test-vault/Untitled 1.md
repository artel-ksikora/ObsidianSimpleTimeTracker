```dataview
TABLE WITHOUT ID Segment, dateStart as "Start time", dateEnd as "End time", duration as "Duration"
from "Untitled"
```

```dataviewjs

const datas = dv.page("Untitled");
console.log(datas);

const data = [
	{name: "111", dateStart: "2022-09-27 10:51:18", "dateEnd": "2022-09-27 10:51:18", "duration": "00:00:06", "level": 0},
	{name: "222", dateStart: "22-09-27 10:51:18", "dateEnd": "22-09-27 10:51:18", "duration": "00:00:06", "level": 1},
	{name: "333", dateStart: "22-09-27 10:51:18", "dateEnd": "22-09-27 10:51:18", "duration": "00:00:06", "level": 1},
	{name: "444", dateStart: "22-09-27 10:51:18", "dateEnd": "22-09-27 10:51:18", "duration": "00:00:06", "level": 0},
	{name: "555", dateStart: "22-09-27 10:51:18", "dateEnd": "22-09-27 10:51:18", "duration": "00:00:06", "level": 1},
	{name: "666", dateStart: "22-09-27 10:51:18", "dateEnd": "22-09-27 10:51:18", "duration": "00:00:06", "level": 0}
];

dv.table(["Segment", "Start time", "End time", "Duration"],
data.filter(file => file.level == 0).map(file => [file.name, dv.date(file.dateStart), file.dateEnd, file.duration]));
```

```dataviewjs
console.log(dv.page("test-comm-data"));
```

