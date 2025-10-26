import Link from 'next/link';

export default function Content({
  rawHTML,
  tableOfContents,
}: {
  rawHTML: string;
  tableOfContents: LegalLink[];
}) {
  return (
    <section className="flex items-start relative scroll-smooth">
      <main className="border-r border-white/8 scroll-smooth p-6 md:p-8 lg:p-10 w-full">
        {rawHTML && (
          <div
            className="prose prose-headings:text-white w-full max-w-full prose-a:text-white prose-h1:text-h6 lg:prose-h1:text-h5 prose-strong:text-white prose-p:text-neutral-500 prose-li:text-neutral-500 prose-h1:scroll-mt-[100px] md:prose-strong:body-text-medium-medium prose-strong:body-text-small-medium prose-p:body-text-small-regular md:prose-p:body-text-medium-regular"
            dangerouslySetInnerHTML={{ __html: rawHTML }}
          />
        )}
      </main>
      <aside className="hidden md:flex flex-col sticky top-[92px] min-w-[300px] lg:min-w-[360px]">
        <div className="p-10 flex flex-col gap-y-4">
          <h4 className="text-xs text-neutral-500 leading-4">
            TABLE OF CONTENT
          </h4>
          <div className="flex flex-col items-start">
            {tableOfContents.map(({ id, name }: LegalLink) => (
              <Link
                className="body-text-medium-regular px-4 ease-in text-neutral-500 border-l-[3px] border-transparent hover:border-[#377AFB] hover:body-text-medium-semi-bold hover:text-white transition-all"
                key={id}
                href={`#${id}`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
