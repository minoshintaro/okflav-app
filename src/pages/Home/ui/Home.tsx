import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { SearchField } from "../../../shared/ui";
import { extractFirstById } from "../../../shared/utils";
import { getLatestProductQueryOptions } from '../../../entities/products';

export function Home() {
  const { data } = useSuspenseQuery(getLatestProductQueryOptions());
  const filterdData = extractFirstById(data);

  return (
    <>
      <div className="space-y-8 h-full">
        <div className="flex justify-center">
          <SearchField placeholder="銘柄" />
        </div>
        <div className="overflow-x-auto -mx-6" data-scrollbar="hidden">
          <div className="flex flex-row-reverse justify-start gap-x-4 gap-y-8 mx-auto px-6 size-fit">
            {filterdData.map(item => (
              <Link
                to="/posts/products/$id"
                params={{ id: `${item.id}` }}
                key={item.id}
                className="font-mincho  hover:text-amber-600 transition-text duration-200 [writing-mode:vertical-rl]"
              >
                <div className="flex flex-row items-center">
                  <p className="text-4xl">{item.brand_name}</p>
                  <p className="mt-4 text-xl">{item.name}</p>
                  <p className="text-xl">（{item.area_name}）</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
