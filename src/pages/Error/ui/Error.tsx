export function Error({ error }: { error: any }) {
  return (
    <div className="absolute inset-0 grid place-items-center w-full h-full">
      <p>Error</p>
      <pre>
        {JSON.stringify(error, null, 2)}
      </pre>
    </div>
  );
}
