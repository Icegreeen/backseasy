import getBlogMetadata from "@/components/blog/getBlogMetadata";
import BlogPreview from "@/components/blog/BlogPreview";
export default function Blogs() {
  const blogMetadata = getBlogMetadata();
  const blogPreviews = blogMetadata.map((blog) => (
    <BlogPreview key={blog.slug} {...blog} />
  ));
  return (
    <div
      className="border border-stroke-1 rounded-out max-w-[1800px] min-h-screen w-full p-64 gap-32 mt-96 flex flex-col max-[580px]:p-32 max-[580px]:gap-24"
      id="blogs"
    >
      <h2 className="text-2 font-medium">Blog</h2>
      <div className="flex flex-col gap-32">{blogPreviews}</div>
    </div>
  );
}
