import FaqsSection from "@/components/FaqsSection";
import PortfolioItem from "@/components/PortfolioItem";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSection from "@/components/TestimonialSection";
import { benefits, portfolios, skills } from "@/constants";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p
              data-aos="fade-down"
              className="px-4 py-2 bg-peach-500 text-grwy-600 w-max rounded"
            >
              Hello There
            </p>
            <h1 className="text-grey" data-aos="fade-down" data-aos-delay="100">
              Bereket Dinku Welcome's you
            </h1>
            <p
              className="text-grwy-600"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              I am Full stack developer .I am always look for opportunity to
              learn and make a difference .I am interested in building software
              that make life easy and productive. I developed cross platform
              mobile app and responsive website. I am focused, committed and
              disciplined person. I am always in process of growth .
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="flex gap-5 mt-10 justify-center tablet:justify-start"
          >
            <Link href={"/contact"} className="btn btn-primary">
              <Phone />
              Contact now
            </Link>
            <Link href={"/portfolio"} className="btn">
              View Portfolio
            </Link>
          </div>
          <div className="bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-15 flex-wrap gap-12 hidden tablet:flex ">
            <div>
              <h1 className="text-grey-700">
                15 <span className="text-purple">+</span>
              </h1>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div>
              <h1 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h1>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div>
              <h1 className="text-grey-700">
                1 <span className="text-purple">+</span>
              </h1>
              <p className="text-grey-600">Years of experience</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-3 tablet:hidden">
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h1 className="text-grey-700">
                15 <span className="text-purple">+</span>
              </h1>
              <p className="text-grey-600">Projects Completed</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h1 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h1>
              <p className="text-grey-600">Happy Customers</p>
            </div>
            <div className="py-8 px-10 rounded-lg bg-peach-400 text-center col-span-2">
              <h1 className="text-grey-700">
                1 <span className="text-purple">+</span>
              </h1>
              <p className="text-grey-600">Years of experience</p>
            </div>
          </div>
        </div>
        <div className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden">
          <Image alt="" src={"/kobeki.png"} fill className="object-cover" />
        </div>
      </section>
      <section className="max-width section-padding">
        <SectionHeading title="Creative Skills" subtitle="" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image src={skill.icon} alt="" width={35} height={35} />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-width section-padding">
        <SectionHeading title="Benefits" subtitle="" />
        <div className="grid grid-cols-[repeat9auto-fit,minmax(300px,1fr)] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-[repeat9auto-fit,minmax(300px,1fr)] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-grey-700 mb-2">{benefit.name}</h5>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <SectionHeading title="My Works" subtitle="" />
        <div className="grid grid-cols-[repeat9auto-fit,minmax(300px,1fr)] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6">
          {portfolios.slice(0, 2).map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>
      </section>
      <TestimonialSection />
      <FaqsSection />
    </>
  );
}
