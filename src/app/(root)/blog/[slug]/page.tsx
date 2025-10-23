import Heading from '@/sections/Heading';
import Content from '@/sections/Content';
import PatternDivider from '@/components/PatternDivider';

export default function BlogDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <h1>{slug}</h1>
      <PatternDivider />
    </>
  );
}
