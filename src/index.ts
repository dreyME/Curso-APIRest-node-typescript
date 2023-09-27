import { hostname } from "os";
import { server } from "./server/Server";

server.listen(3333, () => console.log('App rodando!'));