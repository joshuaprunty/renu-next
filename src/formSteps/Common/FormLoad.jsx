import "ldrs/ripples";

export default function FormLoad() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-full flex flex-col justify-center items-center">
        <l-ripples
          size="90"
          speed="2"
          color="purple"
          className="debug"
        ></l-ripples>
        <i className="mt-4">Loading your results...</i>
      </div>
    </div>
  );
}