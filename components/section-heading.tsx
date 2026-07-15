export function SectionHeading({ index, title, note }: { index: string; title: string; note?: string }) {
  return (
    <header className="section-heading">
      <div className="section-kicker"><span>{index}</span><span>{title}</span></div>
      {note ? <p>{note}</p> : null}
    </header>
  )
}
