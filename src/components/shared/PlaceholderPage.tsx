import { PageIntro } from "@/components/shared/PageIntro";

type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-6xl">
      <PageIntro
        eyebrow="Work Nest"
        title={title}
        description="This V1 screen is ready for implementation."
      />
    </section>
  );
}
