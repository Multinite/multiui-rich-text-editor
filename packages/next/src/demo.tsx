import RichTextEditor from "./RichTextEditor";

/**
 * This component will be directally imported into the corresponding framework and displayed.
 */
export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="border-2 w-fit h-fit border-slate-500">
        <RichTextEditor />
      </div>
    </div>
  );
}
