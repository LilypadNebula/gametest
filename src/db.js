import Dexie from "dexie";

const db = new Dexie("application");

db.version(1).stores({
  amounts: "name,amount",
  progress: "name",
  storeItems: "++id,name,price",
  ownedItems: "++id,name"
});

db.open();

export default db;
