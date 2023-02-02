import { useMemo } from "react";
import { useContext, useState } from "react";
import { POST_DATA } from "../../api/mock-data";
import { ContextCategory } from "../Contexts/CategoryFilter";
import { Post } from "./Post";

export const Feed = () => {
  const { categoryId, setCategoryId } = useContext(ContextCategory);
  const [posts, setPosts] = useState(POST_DATA);

  const filteredPosts = useMemo(() => {
    if (categoryId === "0") {
      return posts;
    }
    return posts.filter((p) => p.categories.some((c) => c.id === categoryId));
  }, [categoryId, posts]);

  return (
    <div className="px-2">
      {filteredPosts.map((p) => (
        // post below each other
        <Post key={p.id} {...p} />
      ))}
    </div>
  );
};
