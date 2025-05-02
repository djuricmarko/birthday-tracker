import ToastTrigger from '~/components/ToastTrigger';

export default async function TestPage() {
  try {
    const response = await fetch('https://api.vercel.app/blog');

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}. Server response: ${errorText}`);
    }

    const posts = await response.json();

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts?.length === 0 ? <p>No posts found.</p> : (
          <ul>
            {posts?.map((post: { id: string; title: string; }) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  } catch (error) {
    return <ToastTrigger error={(error as Error).message || 'An unknown error occurred'}/>;
  }
}
