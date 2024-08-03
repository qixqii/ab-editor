// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@/ab-editor.scss";

// define your extension array
// const extensions = [StarterKit];
const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3], // 配置支持的标题级别
      HTMLAttributes: {
        class: "ab-heading", // 添加自定义类名
      },
    },
  }),
];

const content = "<p>Hello World!</p>";

const AbEditor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>this is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "is-active" : ""}>
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "is-active" : ""}>
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}>
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}>
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}>
          H3
        </button>
      </BubbleMenu>
    </>
  );
};

export default AbEditor;
