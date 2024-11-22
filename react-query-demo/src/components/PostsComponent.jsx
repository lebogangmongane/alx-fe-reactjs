import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

// Create a QueryClient instance
const queryClient = new QueryClient();

// Fetch posts from API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

// PostsComponent
const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // Keep cached data for 5 minutes
    staleTime: 30 * 1000, // Data considered fresh for 30 seconds
    refetchOnWindowFocus: true, // Refetch data when window is focused
    keepPreviousData: true, // Keep old data during fetching new data
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// App component wrapping PostsComponent with QueryClientProvider
const App = () => (
  <QueryClientProvider client={queryClient}>
    <PostsComponent />
  </QueryClientProvider>
);

export default App;
