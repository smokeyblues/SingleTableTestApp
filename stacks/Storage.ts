import { StackContext, Table, Bucket } from "@serverless-stack/resources";

export function Storage({ stack }: StackContext) {

  const table = new Table(stack, "table", {
    fields: {
      pk: "string",
      sk: "string",
      gsi1pk: "string",
      gsi1sk: "string",
    },
    primaryIndex: {
      partitionKey: "pk",
      sortKey: "sk",
    },
    globalIndexes: {
      gsi1: {
        partitionKey: "gsi1pk",
        sortKey: "gsi1sk",
      },
    },
  });

  const bucket = new Bucket(stack, "Uploads");

  return {
          table,
          bucket
        };
}
