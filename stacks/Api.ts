import {
  StackContext,
  use,
  Api as ApiGateway,
} from "@serverless-stack/resources";
import { Storage } from "./Storage";

export function Api({ stack }: StackContext) {
  const storage = use(Storage);

  const api = new ApiGateway(stack, "api", {
    defaults: {
      function: {
        permissions: [storage.table],
        environment: {
          TABLE_NAME: storage.table.tableName,
        },
      },
    },
    routes: {
      "POST /graphql": {
        type: "pothos",
        function: {
          handler: "functions/graphql/graphql.handler",
        },
        schema: "services/functions/graphql/schema.ts",
        output: "graphql/schema.graphql",
        commands: [
          "npx genql --output ./graphql/genql --schema ./graphql/schema.graphql --esm",
        ],
      },
    },
  });

  stack.addOutputs({
    API_URL: api.url,
  });

  return api;
}
