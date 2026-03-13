import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";
import { useEffect, useState } from "react";

function Freebook() {

  const [book, setBook] = useState([]);

  useEffect(() => {

    const getBook = async () => {
      try {

        const res = await axios.get("https://bookstore-backend-u6cu.onrender.com/book");

        const data = res.data.filter(
          (item) => item.category.toLowerCase() === "free"
        );

        setBook(data);

      } catch (error) {
        console.log(error);
      }
    };

    getBook();

  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">

      <h1 className="font-semibold text-xl pb-4">Free Offered Courses</h1>

      <Slider {...settings}>
        {book.map((item) => (
          <div className="px-3" key={item._id}>
            <Cards item={item} />
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default Freebook;