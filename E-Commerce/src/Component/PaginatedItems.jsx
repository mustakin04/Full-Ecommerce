import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import Products from "./Products";
import ProductInfo from "./ProductInfo";
import remote from "../assets/remote.png";
import axios from "axios";
import composeSignals from './../../node_modules/axios/lib/helpers/composeSignals';
import { Link } from "react-router-dom";



// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) =>
           (
            
          <Link to={`productdetails/${item._id}`} key={item._id} className="w-[32%] ">
            <div>
              <Products product={item}></Products>
              <ProductInfo product={item}></ProductInfo>
            </div>
          </Link>
        ))}
    </>
  );
}

const PaginatedItems = ({ itemsPerPage }) => {
 
  const [itemOffset, setItemOffset] = useState(0)
  const [product,SetProduct]=useState([])

  useEffect(()=>{
       const fatchProduct=async()=>{
         const data= await axios.get("https://ecommerce-bu4k.onrender.com/api/v1/product/getProductList",{withCredentials: true,})
          // console.log(data.data.data)
          SetProduct(data.data.data)
       }
      fatchProduct()
  },[])

  console.log(product,"44")
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <Items currentItems={currentItems} />
      </div>
      <div className="mt-[60px]">
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="bg-black text-white py-1 px-[25px]"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        marginPagesDisplayed={2}
        containerClassName="flex gap-3"
        activeClassName="active"
      />
      </div>
    </div>
  );
};

export default PaginatedItems;
