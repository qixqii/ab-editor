// src/Tiptap.tsx
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@/ab-editor.scss";
import Placeholder from "@tiptap/extension-placeholder";

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
  Placeholder.configure({
    placeholder: "Type / to browse options",
  }),
];

const content = "";

const AbEditor = () => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <>
      <EditorContent editor={editor} />
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="floating-menu">
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
            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "is-active" : ""}>
              Bullet List
            </button>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive("orderedList") ? "is-active" : ""}>
              Numbered List
            </button>
            <button onClick={() => editor.chain().focus().toggleTaskList().run()} className={editor.isActive("taskList") ? "is-active" : ""}>
              Task List
            </button>
            <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive("blockquote") ? "is-active" : ""}>
              Blockquote
            </button>
          </div>
        </FloatingMenu>
      )}
      {editor && (
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
      )}
    </>
  );
};

export default AbEditor;
