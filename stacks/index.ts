import { App } from "@serverless-stack/resources";
import { Api } from "./Api";
import { Storage } from "./Storage";
import { Web } from "./Web";

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
  });
  app.stack(Storage).stack(Api).stack(Web);
}
