import { Link } from "react-router-dom";
//design
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <div className="content">
        <h3 className="content__subtitle">So you want to travel to</h3>
        <h1 className="content__title">SPACE</h1>
        <p className="content__description">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="destination">
        <button className="home__explore">Explore</button>
      </Link>
    </main>
  );
};

export default Home;
