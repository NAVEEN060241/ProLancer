import PropTypes from "prop-types";
export default function PricingItems(props) {
  return (
    <>
      {/* Container for the pricing item */}
      <div className="container priceContainer">
        <div className="text-center">
          {/* Title of the pricing item */}
          <h1 className="text-4xl font-semibold">{props.priceTitle}</h1>
          {/* Subtitle of the pricing item */}
          <p className="text-blogSecondary font-bold text-center">
            {props.priceSubTitle}
          </p>
          {/* Description of the pricing item */}
          <p className="pt-5 text-lg font-medium">{props.priceDescrip}</p>
        </div>

        {/* List of features included in the pricing item */}
        <div className="text-lg leading-10 price-list">
          <ul role="list" className="marker:text-blogSecondary list-disc pl-5 space-y-2">
            <li>Custom Web Development</li>
            <li>Mobile App Development</li>
            <li>User-Centered Design</li>
            <li>Responsive Design</li>
            <li>Support & Maintenance</li>
          </ul>
        </div>
        {/* Button to get started with the pricing item */}
        <div>
          <button
            type="button"
            className="getStartedbtn absolute bottom-0 transform -translate-x-16 translate-y-5"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

PricingItems.propTypes = {
  priceTitle: PropTypes.string,
  priceSubTitle: PropTypes.string,
  priceDescrip: PropTypes.string,
};
