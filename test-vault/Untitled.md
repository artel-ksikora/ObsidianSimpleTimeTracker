---
tags: []
---
| Segment         | Start time        | End time          | Duration |
| --------------- | ----------------- | ----------------- | -------- |
| Name::Segment 1 | 22-09-27 10:51:18 | 22-09-27 10:51:24 | 00:00:06 |




[Name::Segment 111]|[Date Start::22-09-27 10:51:18]|[Date End::22-09-27 10:51:24]|[Duration::00:00:06]
[name::Segment 2]|[dateStart::22-09-27 10:51:25]|[dateEnd::22-09-27 10:51:26]|[duration::00:00:01]
[name::Segment 3]|[dateStart::22-09-27 10:51:39]|[dateEnd::22-09-27 10:51:52]|[duration::00:00:13]

[name::Segment 1]|[dateStart::22-09-27 10:51:18]|[dateEnd::22-09-27 10:51:24]|[duration::00:00:06]
[name::Segment 2]|[dateStart::22-09-27 10:51:25]|[dateEnd::22-09-27 10:51:26]|[duration::00:00:01]
[name::Segment 3]|[dateStart::22-09-27 10:51:39]|[dateEnd::22-09-27 10:51:52]|[duration::00:00:13]

| Segment   | Start time        | End time          | Duration |
| --------- | ----------------- | ----------------- | -------- |
| Segment 1 | 22-09-27 10:51:18 | 22-09-27 10:51:24 | 00:00:06 |
| Segment 2 | 22-09-27 10:51:25 | 22-09-27 10:51:26 | 00:00:01 |
| Segment 3 | 22-09-27 10:51:39 | 22-09-27 10:51:52 | 00:00:13 |
[timeTracker::[[name::Segment 1]|[dateStart::22-09-27 10:51:18]|[dateEnd::22-09-27 10:51:24]|[duration::00:00:06]]]
[timeTracker::[[name::Segment 1]|[dateStart::22-09-27 10:51:18]|[dateEnd::22-09-27 10:51:24]|[duration::00:00:06]]]

| Segment                                 | Start time        | End time          | Duration     |
| --------------------------------------- | ----------------- | ----------------- | ------------ |
| `Segment 1`                             | 22-09-27 10:51:18 | 22-09-27 10:51:24 | 00:00:06     |
| Segment 2                               | 22-09-27 10:51:25 | 22-09-27 10:51:26 | 00:00:01     |
| #tag Seqment 3 *add* #tag1 text         |                   |                   | 00:00:31     |
| Part 1 #tagp1                           | 24-03-17 01:16:00 | 24-03-17 01:16:15 | 00:00:15     |
| Part 3                                  | 24-03-17 01:17:08 | 24-03-17 01:17:24 | 00:00:16     |
| #tag3 Segment 4                         |                   |                   | 00:00:16     |
| Part 1 #tag4                            | 24-03-17 02:22:04 | 24-03-17 02:22:16 | 00:00:12     |
| #tag5 Part 2 *italic*                   | 24-03-17 02:22:20 | 24-03-17 02:22:24 | 00:00:04     |
| *italic* Segment 5 #tag6 [test2](test2) | 24-03-17 02:40:37 | 24-03-17 02:40:45 | 00:00:08     |
| **Total**                               |                   |                   | **00:01:02** |


---
countries:
  - name: A
    years:
    - year: 1990
      value: 3
    - year: 1991
      value: 4
    - year: 1992
      value: 5
  - name: B
    years:
    - year: 1990
      value: 10
    - year: 1991
      value: 40
    - year: 1992
      value: 50
---

```dataview
TABLE WITHOUT ID country.name as name, country.years.year as year, country.years.value as value
WHERE file = this.file
FLATTEN countries AS country
```



