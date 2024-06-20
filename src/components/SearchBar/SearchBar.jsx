const SearchBar = ({ func }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    func(e.target.elements.querry.value.trim());
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="querry"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
