import React from "react";

import "./about.css";
import about1 from "./assets/about-1.png";
import about2 from "./assets/about-2.webp";
import about3 from "./assets/about-3.jpg";
import about4 from "./assets/about-4.jpg";
import about6 from "./assets/about-6.png";

const About = () => {
  return (
    <div id="parcourir" className="about sm:pt-28">
      <h2 className="text-center text-xl md:text-5xl font-bold">
        {" "}
        Pourquoi choisir ITC Formation ?
      </h2>
      <section class="max-w-5xl mx-auto pt-7 sm:pt-12">
        <div>
          <div class="flex flex-row">
            <div class="hidden md:flex flex-col items-center">
              <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                <div class="text-xl font-black text-gray-500">Etape 1</div>
                <div class="text-gray-500 text-sm">Idea</div>
              </div>
              <div class="h-full border-l-4 border-transparent">
                <div class="border-l-4 mr-4 h-full border-lime-300 border-dashed"></div>
              </div>
            </div>
            <div class="flex-auto border rounded  border-gray-300 shadow-md hover:shadow-lime-500">
              <div class="flex md:flex-row flex-col items-center">
                <div class="flex-auto">
                  <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span class="font-black">Etape1 1</span> - Idea
                  </div>
                  <div class="p-3 text-3xl text-gray-800 font">
                    Une approche axée sur l’innovation
                  </div>
                  <div class="px-3 pb-6">
                    Chaque formation intègre les dernières avancées en
                    intelligence artificielle, en technologies numériques et en
                    développement durable.
                  </div>
                </div>
                <div class="md:w-96 w-full p-5">
                  <img src={about4} alt="etape 1" class="object-scale-down" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-start flex-row">
            <div class="border-t-4 border-r-4 border-transparent">
              <div class="w-16 ml-16 h-16 border-l-4 border-lime-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div class="border-t-4 border-transparent flex-auto">
              <div class="h-16 border-b-4 border-lime-300 border-dashed"></div>
            </div>
            <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-lime-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="hidden md:flex flex-col items-center">
              <div class="w-32 py-5 border border-lime-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                <div class="text-xl font-black text-gray-500">Etape 2</div>
                <div class="text-gray-500 text-sm">Collaboration</div>
              </div>
              <div class="h-full border-r-4 border-transparent">
                <div class="border-l-4 ml-4 h-full border-lime-300 border-dashed"></div>
              </div>
            </div>
            <div class="flex-auto border rounded  border-gray-300 shadow-md hover:shadow-lime-500">
              <div class="flex md:flex-row flex-col items-center">
                <div class="flex-auto">
                  <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span class="font-black">Etape 2</span> - Collaboration
                  </div>
                  <div class="p-3 text-3xl text-gray-800 font">
                    Des formations professionnalisantes
                  </div>
                  <div class="px-3 pb-6">
                    Nos cursus sont conçus pour répondre aux besoins des
                    entreprises et du marché de l’emploi, avec un fort accent
                    sur la pratique et l’expérience ter rain.
                  </div>
                </div>
                <div class="md:w-96 w-full p-5">
                  <img src={about1} alt="Etape 2" class="object-scale-down" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-start flex-row-reverse">
            <div class="border-t-4 border-l-4 border-transparent">
              <div class="w-16 mr-16 h-16 border-r-4 border-lime-300 border-dashed border-b-4 rounded-br-full"></div>
            </div>
            <div class="border-t-4 border-transparent flex-auto">
              <div class="h-16 border-b-4 border-lime-300 border-dashed"></div>
            </div>
            <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-lime-300 border-dashed border-t-4 rounded-tl-full"></div>
          </div>
          <div class="flex flex-row">
            <div class="hidden md:flex flex-col items-center">
              <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                <div class="text-xl font-black text-gray-500">Etape 3</div>
                <div class="text-gray-500 text-sm">Planification</div>
              </div>
              <div class="h-full border-l-4 border-transparent">
                <div class="border-l-4 mr-4 h-full border-lime-300 border-dashed"></div>
              </div>
            </div>
            <div class="flex-auto border rounded  border-gray-300 shadow-md hover:shadow-lime-500">
              <div class="flex md:flex-row flex-col items-center">
                <div class="flex-auto">
                  <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span class="font-black">Etape 3</span> - Planification
                  </div>
                  <div class="p-3 text-3xl text-gray-800 font">
                    Un accompagnement sur mesure
                  </div>
                  <div class="px-3 pb-6">
                    Sémi naires gratuits animés par des experts, stages et alter
                    nances en entreprise, mentorat post-formation et coa ching
                    entrepreneurial pour assurer votre réussite.
                  </div>
                </div>
                <div class="md:w-96 w-full p-5">
                  <img src={about3} alt="Etape 3" class="object-scale-down" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-start flex-row">
            <div class="border-t-4 border-r-4 border-transparent">
              <div class="w-16 ml-16 h-16 border-l-4 border-lime-300 border-dashed border-b-4 rounded-bl-full"></div>
            </div>
            <div class="border-t-4 border-transparent flex-auto">
              <div class="h-16 border-b-4 border-lime-300 border-dashed"></div>
            </div>
            <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-lime-300 border-dashed border-t-4 rounded-tr-full"></div>
          </div>
          <div class="flex flex-row-reverse">
            <div class="hidden md:flex flex-col items-center">
              <div class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                <div class="text-xl font-black text-gray-500">Etape 4</div>
                <div class="text-gray-500 text-sm">Implementation</div>
              </div>
            </div>
            <div class="flex-auto border rounded  border-gray-300 shadow-md hover:shadow-lime-500">
              <div class="flex md:flex-row flex-col items-center">
                <div class="flex-auto">
                  <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                    <span class="font-black text-xs">Etape 4</span> - Implementation
                  </div>
                  <div class="p-3 text-3xl text-gray-800 font">
                    Des certifications et compétences complémentaires
                  </div>
                  <div class="px-3 pb-6">
                    En plus de votre formation principale, nous vous offrons des
                    certifications Microsoft Office (Word, Excel, PowerPoint),
                    ainsi que des cours d’auto-école gratuits pour faciliter
                    votre mobilité professionnelle.
                  </div>
                </div>
                <div class="md:w-96 w-full p-5">
                  <img src={about6} alt="Etape 4" class="object-scale-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
