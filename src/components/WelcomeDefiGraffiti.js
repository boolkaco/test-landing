import graffiti from "../assets/graffiti.svg";

function WelcomeDefiGraffiti() {
  return (
    <div className="welcome__graffiti-wrapper app__wrapper">
      <img
        className="welcome__graffiti-img"
        src={graffiti}
        alt="graffiti"
      />
    </div>
  );
}

export default WelcomeDefiGraffiti;
