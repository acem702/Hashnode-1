import { Placeholder } from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import { useEffect, useState, type FC } from "react";
import { type DefaultEditorContent } from "~/types";
import { EditorBubbleMenu } from "./components";
import { TiptapExtensions } from "./extensions";
import { TiptapEditorProps } from "./props";

const Editor: FC<{
  renderLocalStorageData?: boolean,
  value: DefaultEditorContent,
  onChange: (value: DefaultEditorContent) => void,
  placeholder?: string | null,
  showBubbleMenu?: boolean
  minHeight?: string;
}> = ({ minHeight = "min-h-[500px]", renderLocalStorageData = true, value, onChange, showBubbleMenu = true, placeholder = null }) => {
  const [hydrated, setHydrated] = useState(false);

  const editor = useEditor({
    extensions: [
      ...TiptapExtensions,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return `Heading ${node.attrs.level as string}`;
          }
          return placeholder || "Press '/' for commands";
        },
        includeChildren: true,
      }),
    ],
    editorProps: TiptapEditorProps,
    onUpdate: (e) => {
      onChange(e.editor.getJSON() as DefaultEditorContent);
    },
    autofocus: "end",
  });

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (renderLocalStorageData && editor && !hydrated) {
      editor.commands.
        setContent(value);
      setHydrated(true);
    }
  }, [editor, hydrated]);

  return (
    <div
      onClick={() => {
        editor?.chain().focus().run();
      }}
      className={`relative select-none w-full max-w-screen-lg bg-transparent ${minHeight}`}
    >
      {showBubbleMenu && editor && <EditorBubbleMenu editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}


export default Editor;