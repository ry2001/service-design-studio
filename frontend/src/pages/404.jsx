export default function NotFound() {
  return (
    <div className="text-center text-white">
      <p className="text-6xl mt-20">404</p>
      <p className="text-4xl mb-20">Page not found</p>
      <p className="pb-10">
        I have no idea what leads you here but since you are here, an additional
        tip: use <code>/*</code> while setting the path in <code>App.jsx</code>.
        That is a wildcard route that will leads any undefined urls to this
        page.
      </p>
    </div>
  );
}
