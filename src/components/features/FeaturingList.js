import FeatureCard from "../common/FeatureCard";

function FeaturingList() {
  return (
    <div className="graffiti features-list">
      <div className="graffiti__content">
        <div className="graffiti__wrapper app__wrapper">

          <div className="graffiti__features-wrapper">
            <div className="graffiti__features-title">
              Featuring
            </div>

            <div className="graffiti__features">
              <FeatureCard type="jellyverse"/>
              <FeatureCard type="jellyswap"/>
              <FeatureCard type="jellystake"/>
              <FeatureCard type="jellybond"/>
              <FeatureCard type="jusd"/>
              <FeatureCard type="more"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturingList;
