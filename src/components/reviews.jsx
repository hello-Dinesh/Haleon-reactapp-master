import React, { useEffect } from "react";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

const Reviews = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      '#keen-slider',
      {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      }
    );

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <section className="">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-green-500 sm:text-5xl">
            Highlights
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-green-500 p-3 text-green-500 transition hover:bg-green-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 rtl:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-green-500 p-3 text-green-500 transition hover:bg-green-500 hover:text-white"
            >
              <svg
                className="h-5 w-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
          <div id="keen-slider" className="keen-slider">
            <div className="keen-slider__slide border border-gray-300">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-green-500 sm:text-3xl">System and Method for Geocoding Positional Accuracy - Patent</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      A geocoding system uses geographic coordinate information such as latitude and longitude values to identify a location. The geocoding of a location varies in granularity i.e. the more precise the latitude and longitude is provided, the more data corresponds close to an address. In geocoding a location, be it a point (address point geocoding), line (street level geocoding) or polygon (geographic boundary level geocoding), the positional accuracy of provided geocode location is of utmost importance. A system and method of determining positional accuracy of a geocoded location in comparison to traditional geocoding methods and geocoders includes, input of a ...
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; US 10119825 · Issued Oct 1, 2017
                </footer>
              </blockquote>
            </div>

            <div className="keen-slider__slide border border-gray-300">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-green-500 sm:text-3xl">Ease of Publishing Immersive Story and Rich Visual Content at Times Internet</p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      In our latest Product blog, we delve into the progress and amazing capabilities of the Times Internet CMS system - Denmark.
                      Learn about some powerful tools, such as Immersive stories and Rich Visual Content powered by Denmark, that our Editors use to create visually appealing and engaging stories, as well as how the full-stack CMS distinguishes us from other media and news publishers in India and around the world!
                      Read: https://lnkd.in/dhxAjyEy
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Times Internet Blog Post · Oct 2, 2022
                </footer>
              </blockquote>
            </div>

            <div className="keen-slider__slide border border-gray-300">
              <blockquote
                className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
              >
                <div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-green-500 sm:text-3xl">
                      A Logarithmic Distance-Based Multi-Objective Genetic Programming Approach for Classification of Imbalanced Data
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      Standard classification algorithms give biased results when data sets are imbalanced. Genetic Programming, a machine learning algorithm based on the evolution of species in nature, also suffers from the same issue. In this research work, we introduced a logarithmic distance-based multi-objective genetic programming (MOGP) approach for classifying imbalanced data. The proposed approach utilizes the logarithmic value of the distance between predicted and expected values. This logarithmic value for the...
                    </p>
                  </div>
                </div>

                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; International Advanced Computing Conference · Feb 8, 2022
                </footer>
              </blockquote>
            </div>
            {/* Add more slides as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
