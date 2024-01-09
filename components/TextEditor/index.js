// import { Color } from "@tiptap/extension-color";
import { useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Toolbar from "./Toolbar";
import ImageResize from "tiptap-extension-resize-image";
// import Youtube from "@tiptap/extension-youtube";
// import "./styles.css";

const TextEditor = ({ value, setValue }) => {
  const editor = useEditor({
    extensions: [
      Link.configure({
        openOnClick: false,
      }),
      // Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      ImageResize.configure({
        allowBase64: true,
        inline: true,
      }),
      // Youtube,
    ],

    content: ``,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setValue(html);

      // const html = editor.getHTML();
      // const wrappedHtml = `<article className="ProseMirror">${html}</article>`;
      // setValue(wrappedHtml);;

      // const json = editor.getJSON();
      // setArticle(JSON.stringify(json));
      // console.log("onUpdated", json);

      // const json = editor.getJSON();
      // setArticle(json);
      // setArticle("article", html);
    },
  });

  useEffect(() => {
    // this is just an example. do whatever you want to do here
    // to retrieve your editors content from somewhere

    editor?.commands.setContent(value);
  }, [editor?.contentComponent]);

  // useEffect(() => {
  //   !article && editor?.chain().clearContent(true).run();
  // }, [article]);

  return (
    <div>
      <Toolbar editor={editor} />

      <EditorContent editor={editor} required={true} />
    </div>
  );
};

export default TextEditor;
