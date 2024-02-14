const express = require('express');
const { Pool } = require('pg');
const app = express();


const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
});

userRoute(app);


app.listen(process.env.APP_PORT, () => {
  console.log(`Serveur Express en cours d'exécution sur http://localhost:${process.env.APP_PORT}`);
}); 