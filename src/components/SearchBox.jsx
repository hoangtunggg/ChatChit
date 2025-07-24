import { RiSearchLine } from "react-icons/ri";
import "../styles/SearchBox.css"; // import file CSS

function SearchBox() {
  return (
    <div className="searchbox-container">
      <label htmlFor="searchPeople" className="sr-only">
        Search contact/chat
      </label>
      <input
        id="searchPeople"
        className="searchbox-input"
        type="text"
        placeholder="Search people"
      />
      <span className="searchbox-icon">
        <RiSearchLine aria-label="search icon" />
      </span>
    </div>
  );
}

export default SearchBox;
