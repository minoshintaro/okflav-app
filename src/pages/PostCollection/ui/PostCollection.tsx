import { PageTitle } from "../../../shared/ui";
import { type PostResponse } from '../../../entities/posts';
import { Detail } from './PostCollection.Detail';

type PostCollectionProps = {
  title: string;
  data: PostResponse[];
};

export function PostCollection({ title, data }: PostCollectionProps) {
  return (
    <div className="space-y-10">
      <PageTitle name={title} />
      <div className="space-y-20">
        {data.map((item) => (
          <div key={item.id}>
            <Detail
              data={item}
              starColor="oklch(0.8 0.15 85)"
              endColor="oklch(0.5 0.1 120)"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
