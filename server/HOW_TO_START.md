
To run the server:
```
npm install

npx prisma generate
```

To you made a change to the schema.table (like add new info, constraints):
```
node -e "const { DatabaseSync } = require('node:sqlite'); const fs = require('fs'); const db = new DatabaseSync('dev.db'); db.exec(fs.readFileSync('schema.sql', 'utf8')); db.close(); console.log('Created dev.db');"
npx prisma db pull
npx prisma generate             
```