import { Link } from "@tanstack/react-router";
import { Color, LinkIcon } from "../../../shared/ui";
import { type PostResponse } from "../../../entities/posts";

type DetailProps = {
  data: PostResponse;
  starColor: string;
  endColor: string;
};
export function Detail({ data, starColor, endColor }: DetailProps) {
  return (
    <article className="relative flex flex-col gap-y-4">
      <header className="absolute right-0 z-10 aspect-square w-full font-mincho [writing-mode:vertical-rl]">
        <div className="flex flex-col-reverse gap-2">
          <h1 className="text-6xl">{data.brand_name}</h1>
          <h2 className="mt-1 text-2xl">{data.product_name}</h2>
        </div>
        <p className="absolute left-0 bottom-0 text-2xl">{data.area_name}</p>
      </header>

      <Color startColor={starColor} endColor={endColor} />
      <p className="text-xl/8 font-serif">{data.comment}</p>

      <footer className="flex gap-4 items-center justify-end">
        <Link to="/posts/users/$id" params={{ id: `${data.user_id}` }}>{data.user_name}</Link>
        <LinkIcon icon="edit" to="/edit/post/$id" params={{ id: `${data.id}` }} />
      </footer>
    </article>
  );
}
