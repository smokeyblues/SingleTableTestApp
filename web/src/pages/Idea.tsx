import { useTypedMutation, useTypedQuery } from "../urql";

interface ChapterForm {
  text: string;
  ideaID: string;
}

interface IdeaForm {
  content: string;
}

export function List() {
  const [ideas] = useTypedQuery({
    query: {
      ideas: {
        id: true,
        content: true,
        chapters: {
          text: true
        }
      }
    }
  });

  const [, addChapter] = useTypedMutation((opts: ChapterForm) => ({
    addChapter: [
      { text: opts.text, ideaID: opts.ideaID },
      {
        id: true,
        text: true
      }
    ]
  }));

  const [, createIdea] = useTypedMutation((opts: IdeaForm) => ({
    createIdea: [
      opts,
      {
        id: true,
      }
    ]
  }));

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Ideas</h2>
      <h3>Start a new project</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          createIdea({
            content: fd.get("content")!.toString()
          });
          e.currentTarget.reset();
        }}
      >
        <input name="content" placeholder="What's the premise" />
        <button type="submit">Submit</button>
      </form>
      <h3>Latest</h3>
      <ol>
        {ideas.data?.ideas.map(idea => (
          <li>
            <div>
              <div>
                {idea.content}
              </div>
              <div>
                <strong>Chapters</strong>
                <ol>
                  {idea.chapters.map(chapter => (
                    <li>{chapter.text}</li>
                  ))}
                </ol>
                <form
                  onSubmit={async e => {
                    const fd = new FormData(e.currentTarget);
                    addChapter({
                      text: fd.get("text")!.toString(),
                      ideaID: idea.id
                    });
                    e.currentTarget.reset();
                    e.preventDefault();
                  }}
                >
                  <input name="text" placeholder="Add a new chapter" />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
