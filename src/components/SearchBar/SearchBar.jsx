import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchQuery.value.trim();

    if (!searchQuery) {
      toast.error("Please enter a movie name...");
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" autoComplete="off" autoFocus />
        <button type="submit" aria-label="Search">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
