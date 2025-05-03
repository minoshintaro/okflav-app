import { useNavigate } from "@tanstack/react-router";
import { DeleteButton } from "../../../shared/ui";
import { useDeletePost } from "../api/useDeletePost";

type DeletePostButtonProps = {
  id: number;
};

export function DeletePostButton({ id }: DeletePostButtonProps) {

  const navigate = useNavigate();
  const { mutate: deletePost } = useDeletePost({
    onSuccess: () => {
      navigate({
        to: '/posts/latest',
      });
    },
    onError: () => {
      alert("削除に失敗しました");
    },
  });

  return (
    <DeleteButton
      onClick={() => {
        deletePost(id);
      }}
    />
  );
}
