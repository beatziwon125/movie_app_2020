import PropTypes from "prop-types";
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    rating: 5,
    name: "Kimchi",
    image:
      "https://image.8dogam.com/resized/product/asset/v1/upload/789ee3ac1c794bae92a6ba3ced50f78b.jpeg?type=big&res=3x&ext=jpg",
  },
  {
    rating: 4.9,
    name: "Samgyopsal",
    image:
      "https://flexible.img.hani.co.kr/flexible/normal/727/485/imgdb/original/2022/0518/20220518501614.jpg",
  },
  {
    rating: 2,
    name: "Bibimbap",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4M0u3es-JXohBar9bpV0Xbz6zADTqokdaQg5pD9iAOaF3YaAi5f0sjkYs1OOAzdR-qXPdY8Rk7unFEDbfEPzbmMkuXX7rQQlixFZrs5bh&s=10",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish, index) => (
        <Food
          key={index}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
