import ToastTrigger from '~/components/ToastTrigger';

export default async function TestPage() {
  try {
    const response = await fetch('https://api.vercel.app/blog');

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}. Server response: ${errorText}`);
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      throw new Error('Received invalid data format from API.');
    }

    const typedPosts = posts as { id: string; title: string; }[];

    return (
      <div>
        <h1>Blog Posts</h1>
        {typedPosts.length === 0 ? <p>No posts found.</p> : (
          <ul>
            {typedPosts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  } catch (error) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }

    return (
      <div>
        <ToastTrigger error={errorMessage}/>
      </div>
    );
  }
}
