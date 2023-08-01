<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/nexus.db"><img src="https://img.shields.io/npm/dt/nexus.db?color=4B68F6&style=for-the-badge" alt="NPM Downloads" /></a>
		<a href="https://www.npmjs.com/package/nexus.db"><img src="https://img.shields.io/npm/v/nexus.db?color=04DCC6&style=for-the-badge" alt="npm Version" /></a>
	</p>
</div>

## About
Nexus.DB is a top-tier & open-source local database for [JSON](https://en.wikipedia.org/wiki/JSON) support designed to be easy to set up and use
- Beginner friendly     
- Easy to use    
- Persistent Storage
- Key-Value like interface    
- Database files inside and outside the project
- Supports [JSON](https://en.wikipedia.org/wiki/JSON)
- Quick respond

## Installation
Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):
```sh
npm install nexus.db
yarn add nexus.db
pnpm add nexus.db
```

## Examples
```js
// Create Database
const NexusDB = require("nexus.db");
const db = new NexusDB.Database({ path: "./Database/NexusDB.json" })


// Data Set | Data Get
db.set("MyBalance", 50000)
db.set("users.aria.balance", 99000) // { users: { aria: { balance: 99000 } } }
db.set("AnObject", { ok: "ok" })
db.get("MyBalance")
db.get("users.aria") // { balance: 99000 }

// Data Exists
db.has("MyBalance") // Boolean

// Fetch All Database Data
db.all() // All Data
db.all(5) // All Data With "5" Limit

// Get JSON'd Database
db.toJSON()
db.toJSON(5) // JSON Data With "5" Limit

// Delete Data
db.delete("users")
db.delete("MyBalance")
db.clear() // Clear All Data

// Data Type
db.type("MyData") // can be (string, number, object, null, array, etc.)

// Data Math Operations
db.add("YourMoney", 10000) // 10000
db.substr("YourMoney", 3000) // 7000
db.add("YourMoney", 10000) /// 17000

// Data Finding
db.includes("rMone") // YourMoney
db.startsWith("YourMo") // YourMoney
db.endsWith("oney") // YourMoney

// Package Info
console.log(NexusDB.version)
```
