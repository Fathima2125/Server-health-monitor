const express = require("express");

const cors = require("cors");

const monitorRoutes =
    require("./routes/monitorRoutes");

const app = express();

app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api", monitorRoutes);


app.get("/", (req, res) => {

    res.json({
        message: "Server Health Monitor API Running"
    });

});


const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});
