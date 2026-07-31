type PageHeroProps = {
  title: string;
  tagline?: string;
};

export function PageHero({ title, tagline }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(10,142,200,0.45), transparent 40%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.12), transparent 35%), linear-gradient(135deg, #0b2430 0%, #123646 55%, #1c4b5e 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative py-14 md:py-20">
        <p className="eyebrow text-brand-soft">Bert Suyker Autorama</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold tracking-wide uppercase md:text-6xl">
          {title}
        </h1>
        {tagline ? (
          <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">{tagline}</p>
        ) : null}
      </div>
    </section>
  );
}
