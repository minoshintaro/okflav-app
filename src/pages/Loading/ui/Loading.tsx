import { Loader } from "../../../shared/ui";

export function Loading() {
  return (
    <div className="absolute inset-0 grid place-items-center w-full h-full">
      <Loader />
    </div>
  );
}
