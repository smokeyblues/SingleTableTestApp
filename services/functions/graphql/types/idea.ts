import { Idea } from "@test/core/idea";
import { ChallengeParametersType } from "aws-sdk/clients/cognitoidentityserviceprovider";
import { builder } from "../builder";

const IdeaType = builder
  .objectRef<Idea.IdeaEntityType>("Idea")
  .implement({
    fields: (t) => ({
      id: t.exposeID("ideaID"),
      content: t.exposeID("content"),
      chapters: t.field({
        type: [ChapterType],
        resolve: idea => Idea.chapters(idea.ideaID)
      }),
    })
  });

const ChapterType = builder.objectRef<Idea.ChapterEntityType>("Chapter").implement({
  fields: t => ({
    id: t.exposeString("chapterID"),
    text: t.exposeString("text")
  })
});

builder.queryFields((t) => ({
  ideas: t.field({
    type: [IdeaType],
    resolve: () => Idea.list(),
  }),
}));

builder.mutationFields((t) => ({
  addChapter: t.field({
    type: ChapterType,
    args: {
      ideaID: t.arg.string({ required: true }),
      text: t.arg.string({ required: true })
    },
    resolve: (_, args) => Idea.addChapter(args.ideaID, args.text)
  }),
  createIdea: t.field({
    type: IdeaType,
    args: {
      content: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => Idea.create(args.content)
  }),
}));
