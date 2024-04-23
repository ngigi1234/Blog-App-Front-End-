import { BiSearch } from "react-icons/bi";

export const SearchBar = () => {

  return (
    <div>
      <div
        className="rounded-full  py-1 px-2 font-serif bg-gray-100 flex-row items-center gap-2 hidden sm:flex"
      >
        <button
          type="submit"
          id="searchbutton"
        >
          <BiSearch fontSize={23} />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border-none w-full text-black bg-gray-100 outline-none py-1"
        />
      </div>
      <div className="flex sm:hidden flex-row items-center">
        <button className="p-2" type="button" >
          <BiSearch fontSize={27} color="grey" />
        </button>
      </div>
    </div>
  );
};
