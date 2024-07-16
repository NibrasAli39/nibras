// pages/index.tsx
import { GetStaticProps } from "next";
import Link from "next/link";
import RSSParser from "rss-parser";

const parser = new RSSParser();

interface Post {
  guid: string;
  title: string;
  link: string;
}

interface HomeProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const feed = await parser.parseURL("https://medium.com/feed/@nibrasali39");
    return {
      props: { posts: feed.items },
    };
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return {
      props: { posts: [] },
    };
  }
};

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
