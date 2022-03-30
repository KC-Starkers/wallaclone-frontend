import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import AdvertCard from "../common/AdvertCard";

const PaginationAdverts = ({ adverts, itemsPerPage }) => {
  const items = adverts;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems.length > 0 ? (
          currentItems.map((advert) => (
            <li key={advert._id} className="col-span-full lg:col-span-3 xl:col-span-2 w-full inline-block">
              <AdvertCard advert={advert} />
            </li>
          ))
        ) : (
          <p>no hay anuncios que mostrar :(</p>
        )}
      </>
    );
  }

  const PaginatedItems = ({ itemsPerPage }) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(adverts);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
    return (
      <>
        <Items currentItems={currentItems} />
        
        <ReactPaginate
          breakLabel="..."
          nextLabel="siguiente >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< anterior"
          renderOnZeroPageCount={null}
          className="text-center col-span-full"
        />
      </>
    );
  };

  return <PaginatedItems itemsPerPage={itemsPerPage} />;
};

export default PaginationAdverts;
