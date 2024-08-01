import RichTextEditor from "./RichTextEditor";

/**
 * This component will be directally imported into the corresponding framework and displayed.
 */
export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-fit h-fit">
        <RichTextEditor className="p-3 bg-red-500 [&>div]:outline-none" />
      </div>
    </div>
  );
}
