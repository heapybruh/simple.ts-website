export function Button({ ...props }) {
  return (
    <a href={props.href} target="_blank">
      <button
        className="px-4 py-2 rounded-xl flex flex-row items-center gap-2 font-bold hover:scale-95"
        {...props}
      />
    </a>
  )
}
