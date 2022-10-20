import "dotenv/config";
import app from "./app";

app.listen(process.env.API_PORT, console.log(`Active server on port ${process.env.API_PORT}!`));