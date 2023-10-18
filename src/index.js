import express from "express";

const app = express();

  
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");	
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
    res.render("index", {list: todayList, date: new Date().toDateString(), type: ""});
});

app.post("/", (req, res) => {
    todayList.push(req.body.task);  
    res.redirect("/");
});

app.get("/work", (req, res) => {
    res.render("index", {list: workList, date: "Work List", type: "work"});
});

app.post("/work", (req, res) => {
    workList.push(req.body.task);  
    res.redirect("/work");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const todayList = [];
const workList = [];