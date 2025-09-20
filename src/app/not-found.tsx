export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-violet-700 tracking-widest">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-500">
        Sorry, the resource you’re looking for doesn’t exist or has been moved.
      </p>

      <div className="mt-6">
        <a
          href="/"
          className="px-6 py-3 text-white bg-violet-700 rounded-lg shadow-md hover:bg-violet-800 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
