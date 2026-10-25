type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col">
      <h1 className="font-serif text-[2.025rem] font-semibold tracking-tight uppercase sm:text-[2.7rem]">
        {title}
      </h1>
      <p className="mt-[0.45rem] max-w-[32.4rem] text-[0.7875rem] text-muted-foreground/70">
        This V1 screen is ready for implementation.
      </p>
    </section>
  );
}
