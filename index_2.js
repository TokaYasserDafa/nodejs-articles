const fs = require("fs");
// const db=require("./db.json");

const readDB = () => {
  const dbString = fs.readFileSync("./db.json", "utf-8") || "[]";
  return JSON.parse(dbString);
};

const listNotes = () => {
  const db = readDB();
  console.log(db);
};

const addNote = ({ title, date }) => {
  const db = readDB();

  const newNote = {
    id: Date.now(),
    title,
    date,
  };
  db.push(newNote);
  fs.writeFileSync("./db.json", JSON.stringify(db, null, 2), "utf-8");
  console.log("note added successfully");
};

const [, , action, title, date] = process.argv;

switch (action) {
  case "add":
    addNote({ title, date });
    break;
  case "list":
    listNotes();
    break;
  default:
    throw new Error('Unknown action. Use "add" or "list".');
    console.log("Unknown action");
}

console.log({
  id: Date.now(),
  action,
  title,
  date,
});
