Json version:
```simple-time-tracker
json
from test-comm-data
```

---
Table version:
```simple-time-tracker
table
from test-comm-data
```

---
Text version:
```simple-time-tracker
text
from test-comm-data
```

---

---
obj:
	key1: "Val"
	key2: 3
	key3: 
		- "List1"
		- "List2"
		- "List3"
---

```dataview
TABLE obj.key1, obj.key2, obj.key3
WHERE file = this.file
```






```dataviewjs
let file = app.vault.getAbstractFileByPath("test-table.md");
//console.log("file", file);

console.log(app);
console.log(dv);
console.log(window);
const STTracker = app.plugins.plugins['simple-time-tracker'];
console.log(STTracker);
console.log(STTracker.api.getContent("test2"));

//import { loadData } from 'simple-time-tracker';
//console.log(loadData);

let content = await app.vault.read(file);
//console.log("content", content);

const table = dv.markdownTable(["Segment", "Start time", "End time", "Duration"], content.sort(b => b.rating) .map(b => [b.file.link, b.genre, b["time-read"], b.rating]))
```

---

---