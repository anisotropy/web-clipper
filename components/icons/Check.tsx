export default function Check({ className }: { className?: string }) {
  return (
    <svg
      className={"w-5 fill-white" + (className ? ` ${className}` : "")}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm-1.25 9.94 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073 1.97 1.97 4.47-4.47-4.47 4.47Z" />
    </svg>
  );
}
