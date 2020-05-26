import snakeImg from "../assets/snake.svg"
import tigerImg  from "../assets/tiger.svg"
import turtleImg  from "../assets/turtle.svg"

// export default {
//   snake: snakeImg,
//   tiger: tigerImg,
//   turtle: turtleImg
// }

export default {
  snake: {
    src: snakeImg,
    alt: "Snake",
    name: "snake"
  },
  tiger: {
    src: tigerImg,
    alt: "Tiger",
    name: "tiger"
  },
  turtle: {
    src: turtleImg,
    alt: "Turtle",
    name: "turtle"
  }
}

// import mascots from "../static/mascots"

// renderImg =() => {
//   switch (this.props.state.team.mascotIMG) {
//     case "snake":
//       return mascots.snake;
//       case "tiger":
//       return mascots.tiger;
//       case "turtle":
//       return mascots.turtle;
  
//     default:
//       break;
//   }
// }

// <img src={renderImg()} name={mascots.snake.name}/>
// <img src={renderImg()} name={mascots.tiger.name}/>
// <img src={renderImg()} name={mascots.turtle.name}/>