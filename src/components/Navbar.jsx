export function Navbar() {
  return (
    <>
      <nav>
        <div className="px-5 py-3 bg-cyan-500">
          <div className="flex justify-between">
            <div className="text-xl">Logo</div>
            <div className="text-lg">X</div>
          </div>
          <ul className="hidden">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
