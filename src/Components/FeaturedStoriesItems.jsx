import PropTypes from "prop-types"
export default function FeaturedStoriesItems(props) {
  return (
    <>
      {/* Container for the story card */}
      <div className="storiesContainer">
        {/* Image for the story card */}
        <img src={props.cardImage} alt="FStories" />
        {/* Card body containing title, description, and button */}
        <div className="card-body flex flex-col gap-5 pt-5 px-5">
          {/* Title of the story */}
          <h1 className="text-xl font-medium">{props.cardTitle}</h1>
          {/* Description of the story */}
          <p className="text-md">
            {props.cardDescrip}
          </p>
          {/* Button to read more */}
          <button type="button" className="getStartedbtn rounded-b-2xl mx-5 py-2 bg-black hover:bg-blogSecondary">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

FeaturedStoriesItems.propTypes = {
    cardImage: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardDescrip: PropTypes.string.isRequired
}