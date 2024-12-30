import PricingItems from "./PricingItems";
export default function Pricing() {
  return (
    <>
      {/* Pricing Section */}
      <div className="container flex flex-col gap-10">
        {/* Price Title */}
        <div>
          <h1 className="text-3xl text-blogSecondary font-bold text-center">
            Pricing
          </h1>
        </div>
        {/* Price Sub Title */}
        <div className="text-2xl text-center">
          <p>Offers Multiple Packages for Monthly and Yearly Subscriptions </p>
        </div>
        {/* Price Cards */}
        <div className="flex flex-row justify-evenly">
          <PricingItems
            priceTitle="₹ 500"
            priceSubTitle="Basic"
            priceDescrip="All the basic/base features are included"
          />
          <PricingItems
            priceTitle="₹ 1000"
            priceSubTitle="Advanced"
            priceDescrip="All the Advanced features are included"
          />
          <PricingItems
            priceTitle="₹ 1500"
            priceSubTitle="Professional"
            priceDescrip="All the professional features are included"
          />
        </div>
      </div>
    </>
  );
}
