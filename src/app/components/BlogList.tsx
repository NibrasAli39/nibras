import Link from "next/link";

interface Post {
  guid: string;
  title: string;
  link: string;
}

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <div>
      <h1>My Medium Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.guid}>
            <Link href={`/post/${post.guid}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
