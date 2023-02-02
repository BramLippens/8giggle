import { useState } from "react";
import { POST_DATA } from "../../api/mock-data";
import { Post } from "./Post";

export const Feed = () => {
  const [posts, setPosts] = useState(POST_DATA);
  return (
    <div className="px-2">
      {/* <div className="flex flex-col"> */}
      {posts.map((p) => (
        // post below each other
        <Post key={p.id} {...p} />
      ))}
      {/* </div> */}
    </div>
  );
};
