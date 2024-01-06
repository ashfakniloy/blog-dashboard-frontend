// import { Color } from "@tiptap/extension-color";
import { useEffect } from "react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/react";
// import { Paragraph } from "@tiptap/extension-paragraph";
// import { Heading } from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import Link from "@tiptap/extension-link";
import Toolbar from "./Toolbar";
import { useFormikContext } from "formik";
// import "./styles.css";

// const TextEditor = ({ article, setArticle }) => {
const TextEditor = () => {
  const { values, setFieldValue } = useFormikContext();

  const editor = useEditor({
    extensions: [
      // Paragraph.configure({
      //   HTMLAttributes: {
      //     class: "text-base text-red-500",
      //   },
      // }),
      // Heading.configure({
      //   HTMLAttributes: {
      //     class: "text-4xl font-bold",
      //   },
      // }),
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
      // Underline as any,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      Image.configure({
        allowBase64: true,
        inline: true,
      }),
      Youtube,
    ],

    content: ``,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // setArticle(html);
      setFieldValue("body", html);

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
    // editor?.commands.setContent(article);
    editor?.commands.setContent(values.body);
  }, [editor?.contentComponent]);

  // useEffect(() => {
  //   !article && editor?.chain().clearContent(true).run();
  // }, [article]);

  return (
    <div>
      <Toolbar editor={editor} />
      <div>
        <EditorContent editor={editor} required={true} />
      </div>
    </div>
  );
};

export default TextEditor;
