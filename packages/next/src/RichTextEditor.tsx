"use client";
import "./RichTextEditorStyles.css";
import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = (
  editorContentProps: Partial<Omit<EditorContentProps, "ref">>
) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
    ],
    content:"hey"
  });

  return (
    <EditorContent
      editor={editorContentProps.editor || editor}
      {...editorContentProps}
      slot={editorContentProps.slot || `richTextEditor`}
    />
  );
};

export default RichTextEditor;
