export * as Idea from "./idea";
import { Dynamo } from "./dynamo";
import { Entity, EntityItem } from "electrodb";
import { ulid } from "ulid";

export const IdeaEntity = new Entity(
  {
    model: {
      version: "1",
      entity: "Idea",
      service: "nanowritlabs",
    },
    attributes: {
      ideaID: {
        type: "string",
        required: true,
        readOnly: true,
      },
      content: {
        type: "string",
        required: true,
      },
    },
    indexes: {
      primary: {
        pk: {
          field: "pk",
          composite: [],
        },
        sk: {
          field: "sk",
          composite: ["ideaID"],
        },
      },
    },
  },
  Dynamo.Configuration
);

export const ChapterEntity = new Entity(
  {
      model: {
        version: "1",
        entity: "Chapter",
        service: "nanowritlabs",
      },
      attributes: {
        chapterID: {
          type: "string",
          required: true,
          readOnly: true,
        },
        ideaID: {
          type: "string",
          required: true,
          readOnly: true,
        },
        text: {
          type: "string",
          required: true,
        },
      },
      indexes: {
        primary: {
          pk: {
            field: "pk",
            composite: ["chapterID"]
          },
          sk: {
            field: "sk",
            composite: [],
          }
        },
        byIdea: {
          index: "gsi1",
          pk: {
            field: "gsi1pk",
            composite: ["ideaID"]
          },
          sk: {
            field: "gsi1sk",
            composite: ["chapterID"],
          }
        }
      },
  },
  Dynamo.Configuration
);

export type IdeaEntityType = EntityItem<typeof IdeaEntity>;

export type ChapterEntityType = EntityItem<typeof ChapterEntity>;

export function create(content: string) {
  return IdeaEntity.create({
    ideaID: ulid(),
    content,
  }).go();
}

export async function list() {
  return IdeaEntity.query.primary({}).go();
}

export async function addChapter(ideaID: string, text: string) {
  return ChapterEntity.create({
    ideaID,
    chapterID: ulid(),
    text,
  }).go()
}

export async function chapters(ideaID: string) {
  return ChapterEntity.query.byIdea({
    ideaID,
  }).go()
}

