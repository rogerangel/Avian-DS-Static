import Image from "next/image";
import Feature_IMG from "../../public/Feature_IMG.jpeg";
import Feature_IMG_other from "../../public/Feature_IMG_other.jpeg";
import Hero from "@/components/Hero";
import { BsCheckCircle } from "react-icons/bs";
import PackageCards from "@/components/PackageCards";
import FeatureAnimation from "@/components/FeatureAnimation";
import Google_iframe from "@/components/Google_iframe";

export default function Home() {
  return (
    <main className="">
      <div id="hero" />
      <Hero />
      <div className="w-full h-full bg-slate-50">
        <FeatureAnimation delay={2.5} duration={0.8}>
          <h4 className="text-md text-center p-20">
            YOUR NUMBER ONE DRIVING SCHOOL FOR CDL AND DRIVERS EDUCTION
          </h4>
        </FeatureAnimation>
      </div>
      {/* prices and Packages section */}
      <div
        className="gap-10 bg-slate-50 flex flex-row flex-wrap justify-center scroll-mt-28"
        id="packages"
      >
        <PackageCards
          banner="Package 1"
          price="$189"
          featureIcons={<BsCheckCircle />}
          features={[
            "1 Lesson of 45 min.",
            "5 Hours Course",
            "Road Test Services",
            "Car for Road Test",
            "Road Test Guidelines",
          ]}
        />
        <PackageCards
          banner="Package 2"
          price="$285"
          featureIcons={<BsCheckCircle />}
          features={[
            "3 Lessons of 45 min.",
            "5 Hours Course",
            "Road Test Services",
            "Car for Road Test",
            "Road Test Guidelines",
          ]}
        />
        <PackageCards
          banner="Package 3"
          price="$339"
          featureIcons={<BsCheckCircle />}
          features={[
            "4 Lessons of 45 min.",
            "5 Hours Course",
            "Road Test Services",
            "Car for Road Test",
            "Road Test Guidelines",
          ]}
        />
        <PackageCards
          banner="Package 4"
          price="$379"
          featureIcons={<BsCheckCircle />}
          features={[
            "5 Lessons of 45 min.",
            "5 Hours Course",
            "Road Test Services",
            "Car for Road Test",
            "Road Test Guidelines",
          ]}
        />
        <PackageCards
          banner="Package 5"
          price="$629"
          featureIcons={<BsCheckCircle />}
          features={[
            "10 Lessons of 45 min.",
            "5 Hours Course",
            "Road Test Services",
            "Car for Road Test",
            "Road Test Guidelines",
          ]}
        />
        <PackageCards
          banner="Package 6"
          price="$759"
          featureIcons={<BsCheckCircle />}
          features={[
            "15 Lessons of 45 min.",
            "5 Hours Course",
            "Road Test Services",
            "Car for Road Test",
            "Road Test Guidelines",
          ]}
        />
      </div>
      {/* card with business features */}
      <div className="w-full h-full py-12 bg-avianDS-blue-logo">
        <FeatureAnimation
          className="flex flex-row justify-evenly"
          delay={0.6}
          duration={0.8}
        >
          <div className="flex flex-col overflow-visible relative m-10 max-w-[348px] h-[450px] w-full bg-white p-5 text-center shadow-2xl">
            <Image
              src={Feature_IMG_other}
              alt="Feature_IMG_other Logo"
              width="auto"
              height="auto"
            />
            <h4 className="text-2xl py-5 font-bold text-avianDS-blue-logo">
              Licensed Training
            </h4>
            <p className="text-md px-5 text-avianDS-blue-logo">
              We offer the best driving school services with certified and
              patient instructors. Our instructors are ready to teach you how to
              be the best driver you can be.
            </p>
          </div>
          <div className="flex flex-col overflow-visible relative m-10 max-w-[348px] h-[450px] w-full bg-white p-5 text-center shadow-2xl">
            <Image
              src={Feature_IMG_other}
              alt="Feature_IMG_other Logo"
              width="auto"
              height="auto"
            />
            <h4 className="text-2xl py-5 font-bold text-avianDS-blue-logo">
              Comfort Vehicles
            </h4>
            <p className="text-md px-5 text-avianDS-blue-logo">
              As our student, we want you to be able to drive in the most
              comfortable and up to date vehicles! We offer 2023 model vehicles
              ready for you!
            </p>
          </div>
          <div className="flex flex-col overflow-visible relative m-10 max-w-[348px] h-[450px] w-full bg-white p-5 text-center shadow-2xl">
            <Image
              src={Feature_IMG_other}
              alt="Feature_IMG_other Logo"
              width="auto"
              height="auto"
            />
            <h4 className="text-2xl py-5 font-bold text-avianDS-blue-logo">
              Flexible Schedules
            </h4>
            <p className="text-md px-5 text-avianDS-blue-logo">
              We are open seven days a week! We offer a schedule that
              accommodates your time and needs. Our instructors can pick you up
              and drop you off, right at your front door.
            </p>
          </div>
          <div className="flex flex-col overflow-visible relative m-10 max-w-[348px] h-[450px] w-full bg-white p-5 text-center shadow-2xl">
            <Image
              src={Feature_IMG_other}
              alt="Feature_IMG_other Logo"
              width="auto"
              height="auto"
            />
            <h4 className="text-2xl py-5 font-bold text-avianDS-blue-logo">
              Driving Practice
            </h4>
            <p className="text-md px-5 text-avianDS-blue-logo">
              Our goal is to prepare you become a confident driver. We provide
              you with all the practice and lessons you need to become the best
              driver you can be.
            </p>
          </div>
        </FeatureAnimation>
      </div>
      {/* faqs */}
      <div id="faqs" className="scroll-m-10" />
      <FeatureAnimation
        className="flex flex-col w-full h-full items-center"
        delay={0.7}
        duration={1.8}
      >
        <div className="max-w-[1100px] p-12 mt-12">
          <h4 className="text-2xl text-center font-medium">
            Avian Driving School FAQs
          </h4>
          <p className="text-md font-light py-5">
            Are you ready to take the wheel of your future? Look no further!
            AVIAN DRIVING SCHOOL is here to equip you with the skills and
            knowledge you need to be the best driver on the road. Whether
            you&apos;re a seasoned adult looking to upgrade your skills or a
            team of aspiring professional drivers, we cater to everyone&apos;s
            needs.
          </p>
          <h3 className="text-xl font-medium">
            Why Choose AVIAN DRIVING SCHOOL?
          </h3>
          <h3 className="text-xl font-medium mt-5">Unmatched Expertise 💼</h3>
          <p className="text-md font-light py-5">
            At AVIAN DRIVING SCHOOL, we take immense pride in our team of highly
            experienced instructors who possess extensive knowledge of both CDL
            and driver education. Our instructors go through rigorous training
            and certification processes, ensuring they provide top-notch
            guidance to all our students. We stay on top of the latest industry
            standards and techniques, guaranteeing you receive up-to-date
            instruction.
          </p>
          <h3 className="text-xl font-medium">Comprehensive CDL Training 🚚</h3>
          <p className="text-md font-light py-5">
            For those seeking a rewarding career in the transportation industry,
            our CDL training will equip you with the skills necessary to
            maneuver various commercial vehicles with confidence and precision.
            We cover all aspects, from pre-trip inspections and basic vehicle
            control to advanced techniques required for passing the CDL
            examination. Our professional instructors will guide you every step
            of the way, ensuring you are ready for success in your new career.
          </p>
          <h3 className="text-xl font-medium">Tailored Driver Education 🚗</h3>
          <p className="text-md font-light py-5">
            It&apos;s never too late to become a safe and responsible driver.
            Our driver education programs are tailored to suit individuals of
            all ages (both adults and teenagers), helping you develop excellent
            driving habits and techniques that will last a lifetime. Our
            instructors strive to create a supportive and engaging learning
            environment, making your journey enjoyable while ensuring you meet
            all the essential requirements for obtaining your driver&apos;s
            license.
          </p>
          <h3 className="text-xl font-medium">
            State-of-the-Art Facilities and Training Vehicles 🚛
          </h3>
          <p className="text-md font-light py-5">
            We understand that comfort and convenience play a vital role in your
            learning experience. That&apos;s why our driving school is equipped
            with modern facilities and training vehicles. Our fleet consists of
            well-maintained cars and commercial vehicles, ensuring you gain
            confidence and competence in handling different types of
            transportation equipment.
          </p>
          <h3 className="text-xl font-medium">Flexible Schedule Options ⏰</h3>
          <p className="text-md font-light py-5">
            We recognize that our students have diverse commitments and busy
            lives. Hence, AVIAN DRIVING SCHOOL offers flexible scheduling
            options. We customize our programs to fit around your availability,
            providing convenient time slots for both classroom sessions and
            behind-the-wheel training. You can continue with your day-to-day
            activities while making progress towards your driving
          </p>
        </div>
      </FeatureAnimation>
      {/* an image */}
      <div className="w-full h-screen max-h-[640px] relative overflow-hidden bg-avianDS-blue justify-evenly">
        <Image
          src={Feature_IMG}
          alt="Feature_IMG"
          fill="responsive"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col w-full h-full items-center" id="contact">
        <Google_iframe
          className="h-[1000px] w-screen p-2 md:p-32"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.5055052162716!2d-73.88347932318122!3d40.88272497136851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f31813831973%3A0xfc84ac80932249a9!2sAvian%20Driving%20School!5e0!3m2!1sen!2sus!4v1691419705378!5m2!1sen!2sus"
          width="auto"
          height="auto"
        />
      </div>
      {/* embeded google map */}
      {/* footer with company info */}
    </main>
  );
}
