import PropTypes from "prop-types";
export default function ServiceItems(props) {
  return (
    <>
      {/* Service Item Section */}
      <div className="container text-center">
        {/* Service Heading */}
        <h1 className="text-2xl font-semibold">{props.SHeading}</h1>
        {/* Service Image */}
        <div className="h-72 py-10 flex justify-center">
          <img src={props.SImage} alt="ServiceImage" />
        </div>
        {/* Service Description */}
        <p
          className="mx-10 px-10 py-5 text-justify bg-black text-white h-1/3 rounded-xl hyphens-auto"
          lang="en"
        >
          {props.SDescription}
        </p>
      </div>
    </>
  );
}

ServiceItems.propTypes = {
  SHeading: PropTypes.string,
  SImage: PropTypes.string,
  SDescription: PropTypes.string,
};
