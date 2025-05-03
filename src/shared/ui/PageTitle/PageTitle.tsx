type PageTitleProps = {
    name: string;
};

export function PageTitle({ name }: PageTitleProps) {
    return (
      <h1 className="mx-auto w-fit pt-2 px-1 border-t-1 font-serif">{name}</h1>
    );
}
