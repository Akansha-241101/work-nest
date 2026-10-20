type PlaceholderPageProps = { title: string }

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-6xl">
      <p className="mb-2 text-sm text-muted-foreground">Work Nest</p>
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-3 text-muted-foreground">This V1 screen is ready for implementation.</p>
    </section>
  )
}
