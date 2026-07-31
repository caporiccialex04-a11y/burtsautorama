import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-narrow text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-wide text-navy uppercase">
          Page not found
        </h1>
        <p className="mt-4 text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
