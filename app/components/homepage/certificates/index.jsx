// @flow strict

import { certificates } from "@/utils/data/certificates";
import { certificateImage } from "@/utils/certificate-image";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import certificate from '../../../assets/lottie/certificate.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certificates() {
  return (
    <div id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          <div>
            <div className="flex flex-col gap-6">
              {
                certificates.map(certificate => (
                  <GlowCard key={certificate.id} identifier={`certificate-${certificate.id}`}>
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {certificate.issued}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <Image
                          src={certificateImage(certificate.shortForm)?.src}
                          alt="Hero"
                          width={80}
                          height={80}
                          />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {certificate.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {certificate.issuedBy}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={certificate} />
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Certificates;