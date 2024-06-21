import css from "./SearchBar.module.css";

const SearchBar = ({ func }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    func(e.target.elements.querry.value.trim());
  };
  return (
    <>
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="querry"
            className={css.input}
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
