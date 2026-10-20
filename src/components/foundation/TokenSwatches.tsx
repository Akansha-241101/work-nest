type TokenGroupProps = { title: string; tokens: string[] };

export function TokenSwatches({ title, tokens }: TokenGroupProps) {
  return (
    <section>
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tokens.map((token) => (
          <div className="overflow-hidden rounded-xl border bg-card" key={token}>
            <div
              className="h-14 border-b"
              style={{ backgroundColor: `var(--${token})` }}
            />
            <div className="p-3">
              <p className="truncate text-sm font-medium">
                {token.replaceAll("-", " ")}
              </p>
              <code className="text-xs text-muted-foreground">--{token}</code>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
