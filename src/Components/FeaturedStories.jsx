import FeaturedStoriesItems from "./FeaturedStoriesItems";
import rankingImage from "../assets/cardRanking.svg";
import communicationImage from "../assets/cardCommunication.svg";
import remoteImage from "../assets/cardRemote.svg";

export default function FeaturedStories() {
  return (
    <>
      {/* Stories Section */}
      <div className="container text-center">
        {/* Stories Header Section */}
        <div className="flex flex-col items-center gap-5 justify-center">
          <p className="font-semibold">Recent Updates</p>
          <h1 className="text-3xl text-blogSecondary font-semibold">
            Featured Stories
          </h1>
        </div>
        {/* Featured Stories Items */}
        <div className="flex flex-row justify-evenly items-center mt-16">
          <FeaturedStoriesItems
            cardImage={rankingImage}
            cardTitle="Social Media"
            cardDescrip="Check out for recent works"
          />
          <FeaturedStoriesItems
            cardImage={communicationImage}
            cardTitle="Communication"
            cardDescrip="Best communication with clients"
          />
          <FeaturedStoriesItems
            cardImage={remoteImage}
            cardTitle="Remote Working"
            cardDescrip="Connectivity for consistent"
          />
        </div>
      </div>
    </>
  );
}
