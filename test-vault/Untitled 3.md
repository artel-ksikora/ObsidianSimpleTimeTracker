
[Segment::123]|[Start time::2024-01-14T20:18:00]|[End time::2024-01-14T21:34:00]|[Duration::00:00:15]|[Level::0]

```dataview
TABLE WITHOUT ID Segment, start-time as "Start time", end-time as "End time", Duration
WHERE file = this.file AND Level = 0
```
