import Button from "./Button";

/**
 * This component will be directally imported into the corresponding framework and displayed.
 */
export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      This is my example Button coomponent.
      <Button>Hello World</Button>
    </div>
  );
}
