"use client";

export default function Error({ error, reset }) {
  return (
    <div className="grid items-center justify-center">
      <h1 className="text-2xl font-medium text-red-500">An error occurred</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again!</button>
    </div>
  );
}
