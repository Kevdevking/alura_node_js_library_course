import app from "./src/app.js";

const PORT = 3000;
const routes = {
    "/": "Node.js course",
    "/books": "Entered Book's route",
    "/authors": "Entered Author's route"
}

app .listen(PORT, () => {
    console.log("listening");
});