import React, { useEffect, useState } from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import Products from "./Products";
import ProductInfo from "./ProductInfo";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router";

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get("https://ecommerce-bu4k.onrender.com/api/v1/product/getProductList");
        setProducts(data.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-64px] right-[30px] h-9 w-9 flex justify-center items-center rounded-full bg-[#F5F5F5] z-[999] cursor-pointer"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-64px] right-[80px] h-9 w-9 flex justify-center items-center rounded-full bg-[#F5F5F5] z-[999] cursor-pointer"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="pt-[140px]">
      <Container className="pb-[80px] border-b-2 border-black">
        <Card tittle="Today's" />
        <div className="flex items-end gap-[87px]">
          <div>
            <h3 className="font-Inter font-semibold text-[36px] text-[#000000]">Flash Sales</h3>
          </div>
          <div className="flex items-center gap-[17px]">
            {["Days", "Hour", "Minutes", "Seconds"].map((label, index) => (
              <React.Fragment key={label}>
                <div>
                  <p className="font-Poppins font-medium text-[12px] text-[#000000]">{label}</p>
                  <p className="font-Inter font-bold text-[32px] text-[#000000] mt-[4px]">03</p>
                </div>
                {index < 3 && <div className="text-[#e07575] text-2xl">:</div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="w-full mt-[40px]">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <Slider {...settings}>
              {products.map((product) => (
                <Link to={`/shop/productdetails/${product._id}`} key={product._id}>
                  <Products value={true} product={product} />
                  <ProductInfo product={product} />
                </Link>
              ))}
            </Slider>
          )}
        </div>

        <Link to="/shop" className="mt-6">
          <Button tittle="View All Products" />
        </Link>
      </Container>
    </div>
  );
};

export default FlashSales;
