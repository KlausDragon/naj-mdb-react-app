function Categories({ currentSelectedCategory, setCurrentSelectedCategory }) {
  return (
    <div className="categories">
      {["Popular", "Top Rated", "Upcoming", "Now Playing"].map((category) => (
        <button
          key={category}
          onClick={() => setCurrentSelectedCategory(category)}
          className={currentSelectedCategory === category ? "active" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
