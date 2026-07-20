type QuoteBlockProps = {
  quote: string;
  author?: string;
};

export default function QuoteBlock({
  quote,
  author,
}: QuoteBlockProps) {
  return (
    <blockquote className="mx-auto max-w-4xl rounded-3xl border-l-4 border-emerald-600 bg-slate-50 p-10">
      <p className="text-2xl italic leading-10 text-slate-700">
        "{quote}"
      </p>

      {author && (
        <footer className="mt-8 font-semibold text-emerald-700">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}