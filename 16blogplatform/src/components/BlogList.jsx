import { BlogCard } from "./BlogCard";

export function BlogList({ posts }) {
  return (
    <div>
      {posts.length === 0 ? <p>No posts found.</p> : posts.map((post) => <BlogCard key={post.id} post={post} />)}
    </div>
  );
}