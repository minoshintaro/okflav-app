import { type PostResponse } from '../../../entities/posts';
import { DeletePostButton } from '../../../features/deletePost';
import { PostForm } from '../../../features/useForm';

type PostEditorProps = {
  data?: PostResponse;
};

export function PostEditor({ data }: PostEditorProps) {
  return (
    <>
      <PostForm data={data} />
      {data?.id && (
        <div className="flex justify-end mt-6">
          <DeletePostButton id={data.id} />
        </div>
      )}
      <aside className="my-12">
        <p className="text-xs text-gray-400">
          ※銘柄一覧に「<a href="https://sakenowa.com" target="_blank" className="underline underline-offset-2">さけのわデータ</a>」を使用しています
        </p>
      </aside>
    </>
  );
}
