import express, { json } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import departments_routes from "./routes/departments.js";
import tasks_routes from "./routes/tasks.js";

// import auth_routes from './routes/auth.js';
// import descriptions_routes from './routes/descriptions.js';

const app = express();

const option = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "API системы документооборота предпрития",
      version: "0.1.0",
      description: "REST API Application made with Express and documented with Swagger",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./models/*.js", "./services/*.js"],
};

const specs = swaggerJsdoc(option);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));

app.use(cors());
// есть вариант boby-parser какой-то юзать (BodyParser.json())
app.use(json());

app.use("/departments", departments_routes);
app.use("/tasks", tasks_routes);

app.listen(5000, () => console.log("server has started on port 5000"));
