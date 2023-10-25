import jelly from "../assets/jelly.png";
function Jellyfish({ appRef }) {
  return (
    <div className="jellyfish-wrapper">
      <img src={jelly} className="jellyfish__img" alt="jelly"/>
    </div>
  );
}

export default Jellyfish;
