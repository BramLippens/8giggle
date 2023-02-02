import { useState } from "react";

// spread
export const Post = ({
  id,
  title,
  description,
  categories,
  image,
  likes,
  dislikes,
}) => {
  const [like, setLike] = useState(parseInt(likes));
  const [dislike, setDislike] = useState(parseInt(dislikes));
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-5">
      <img className="w-full" src={image} alt={title} />
      <div className="p-4">
        <div className="flex items-center">
          <div className="text-gray-700 font-bold text-xl mb-2">{title}</div>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="grid grid-cols-5 mb-4">
        <div className="col-span-2 justify-items-start">
          <button
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            onClick={() => setLike(like + 1)}
          >
            Like {like}
          </button>
          <button
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            onClick={() => setDislike(dislike + 1)}
          >
            Dislike {dislike}
          </button>
        </div>
        <div className="col-span-3">
          {categories.map((c) => (
            <span
              key={c.id}
              className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
