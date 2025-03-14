require("dotenv").config();
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const specs = require("./middleware/swagger.config");
const fileRouter = require("./routes/file.routes");

const userRouter = require("./routes/user.routes");
const connectDB = require("./configdb");
const port = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use('/uploadfiles', fileRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => { 
  console.log(`app listening at http://localhost:${port}`);
});
