import ServiceItems from "./ServiceItems";
import webDevImage from "../assets/serviceWebDev.svg";
import mobDevImage from "../assets/serviceMobDev.svg";
import designerImage from "../assets/serviceDesigner.svg";
export default function Services() {
  return (
    <>
      {/* Service Section */}
      <div className="container flex flex-col gap-10" >
        <div className="flex flex-col items-center  justify-center gap-5">
          <p className=" font-semibold">Final Touch</p>
          <h1 className="text-3xl text-blogSecondary font-semibold">
            Services
          </h1>
        </div>
        <div className="flex flex-row">
          {/* Service - 1 */}
          <ServiceItems
            SHeading="Web Development"
            SImage={webDevImage}
            SDescription="I specialize in creating custom websites, blending design and functionality. From responsive layouts to complex back-end systems, I help the clients with required convenience"
          />
          {/* Service - 2 */}
          <ServiceItems
            SHeading="Mobile App Development"
            SImage={mobDevImage}
            SDescription="I develop mobile applications for both iOS and Android, focusing on intuitive interfaces and smooth performance. I build apps that meet client needs, offering user-centric features and reliable functionality."
          />
          {/* Service - 3 */}
          <ServiceItems
            SHeading="Designer"
            SImage={designerImage}
            SDescription="As a designer, I craft unique and visually engaging designs. Whether it's branding, web, or graphic design, I aim to deliver creative solutions that align with client goals and leave a lasting impression."
          />
        </div>
      </div>
    </>
  );
}
