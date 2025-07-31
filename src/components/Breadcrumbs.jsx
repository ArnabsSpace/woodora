import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  // Don't render on homepage
  if (pathnames.length === 0) return null;

  // Convert kebab-case or camelCase to Title Case
  const formatName = (str) =>
    str
      .replace(/-/g, ' ')                // kebab-case to space
      .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space
      .replace(/\b\w/g, c => c.toUpperCase()); // capitalize first letters

  return (
    <div className="bg-white-100 py-3 px-4 sm:px-8 text-sm font-medium ">
      <nav className="text-gray-600 container mx-auto border-b-2 py-4 my-4">
        <ol className="flex items-center flex-wrap gap-1">
          <li>
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span className="mx-2">/</span>
          </li>

          {pathnames.map((name, idx) => {
            const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
            const isLast = idx === pathnames.length - 1;

            return (
              <li key={routeTo} className="flex items-center">
                {isLast ? (
                  <span className="text-gray-700">{formatName(name)}</span>
                ) : (
                  <>
                    <Link to={routeTo} className="text-primary hover:underline">
                      {formatName(name)}
                    </Link>
                    <span className="mx-2">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
