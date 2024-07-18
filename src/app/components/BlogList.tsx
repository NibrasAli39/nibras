import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      transition={{
        ease: "linear",
        duration: 2,
        x: { duration: 1 },
      }}
    >
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
    </motion.div>
  );
};

export default Home;
