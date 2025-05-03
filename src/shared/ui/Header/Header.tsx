import { Link } from '@tanstack/react-router';
import { LinkIcon } from '../LinkIcon';
import { BackNav } from '../BackNav';

export function Header() {
  return (
    <div className="flex justify-between items-center gap-2 py-2 px-2">
      <div>
        <BackNav />
      </div>
      <Link to="/">
        <h1 className="text-lg font-mono">Okflav</h1>
      </Link>
      <div>
        <LinkIcon icon="post" to="/posts/latest" />
      </div>
    </div>
  );
}
