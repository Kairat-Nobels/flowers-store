import React, { useState, useRef, useEffect } from "react";
import './CategoriesDropdown.scss';

const CategoriesDropdown = ({ categories, changeCategory }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li className="categories-dropdown" ref={ref}>
      <button
        className="dropdown-toggle"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        Категории
      </button>
      {open && (
        <ul className="dropdown-menu">
          {categories.map((cat) => (
            <li key={cat.id}>
              <p onClick={() => {
                changeCategory(cat.name);
                setOpen(false)
              }}>
                {cat.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CategoriesDropdown;