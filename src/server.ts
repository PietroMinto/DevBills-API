import "dotenv/config";
import express, {
  type Express,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import { setupMongo } from "./database";
import { errorHandler } from "./middleware/error-handler.middleware";
import { routes } from "./routes";

const PORT = process.env.PORT || 3333;
const FRONT_URL = process.env.FRONT_URL || "*";

setupMongo()
  .then(() => {
    const app: Express = express();

    app.use(
      cors({
        origin: FRONT_URL,
      })
    );

    app.use(express.json());

    app.use(routes);

    // Middleware de tratamento de erros
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(error);
      res.status(500).json({ message: error.message });
    });

    app.listen(PORT, () => console.log(`🚀 Server running at port ${PORT}!`));
  })
  .catch((error) => {
    console.error("Error setting up the server:", error);
  });
