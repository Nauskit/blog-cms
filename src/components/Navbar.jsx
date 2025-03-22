import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function popUp() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <nav>
        <div className="px-5 py-3 bg-black text-white">
          <div className="flex justify-between">
            <div className="text-xl">Logo</div>
            <div className="text-lg cursor-pointer" onClick={popUp}>
              X
            </div>
          </div>
          <ul
            className={`${
              isOpen ? "flex flex-col items-center gap-5 p-3" : "hidden"
            }`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Content</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
