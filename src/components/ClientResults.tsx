import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, TrendingUp, Instagram, Youtube, Sparkles, ArrowRight, Volume2 } from 'lucide-react';
import data from '../data/data.json';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
const ClientCard = ({ client, index, onClick }) => (
  <div onClick={onClick} className="cursor-pointer">
    <AnimatedSection
      delay={100 * index}
      className="rounded-xl p-4 transition-all duration-300"
    >
      {/* <motion.div className="rounded-lg overflow-hidden mb-4" whileHover={{ scale: 1.05 }}> */}
        {/* <div className="relative w-full h-full group rounded-xl border border-agency-orange/20 bg-white/90 backdrop-blur-sm hover:border-agency-gold/40 transition-all duration-300 glow-on-hover"> */}
          {/* {client.image ? (
            <img
              src={client.image}
              className="w-full h-full object-cover rounded-xl"
              alt={client.name}
            />
          ) : (
            <TrendingUp className="w-full h-full text-agency-orange opacity-70" />
          )} */}
          {/* <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 rounded-xl bg-white/40 backdrop-blur-sm">
            <div className="w-1/3 h-1/3 object-cover text-agency-orange opacity-70">
              <span className="text-2xl font-bold">{client.name}</span>
            </div>
          </div> */}
        {/* </div> */}
      {/* </motion.div> */}
      {/* <h3 className="text-xl font-bold text-agency-dark mb-2 text-center">{client.name}</h3>
      <div className="text-gray-600 text-center flex flex-col items-center gap-2">
        {client.platforms.includes('Instagram') && (
          <div className="text-agency-orange flex items-center gap-1">
            <Instagram className="w-5 h-5" /> <strong>{client.instagramFollowers}</strong> followers
          </div>
        )}
        {client.platforms.includes('YouTube') && (
          <div className="text-agency-orange flex items-center gap-1">
            <Youtube className="w-5 h-5" /> <strong>{client.youtubeSubscribers}</strong> subscribers
          </div>
        )}
      </div> */}


           

          {/* MIDDLE CARD */}
          <div
            className={`
              bg-blue-900
              rounded-2xl
              relative
              shadow-2xl
              transform
             
              transition-transform
              duration-300
              border-8 border-agency-dark
            `
          }
          style={
            {
              width: client.hw.w,
              height: client.hw.h,
              rotate: `${client.rotate}deg`,
            }
          }
          >
            {/* Top “speaker/volume” icon */}
            <div className="absolute top-2 right-2 text-white">
              <Volume2 className="w-6 h-6 opacity-90" />
            </div>
            {/* Content */}
            <img src={client.image} alt={client.name} className="w-full h-full object-cover rounded-xl" />
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white text-xl font-bold mb-2">
                Watch full video
              </h3>
              <p className="text-white text-sm">on youtube</p>
              <div className="bg-gray-200 w-[180px] h-[100px] mt-4 flex items-center justify-center rounded-lg">
                <span className="text-gray-700 font-semibold">Subscribe</span>
              </div>
            </div> */}
            
            {/* <div className="absolute bottom-4 w-full px-2">
              <div className="bg-gray-700 w-full h-1 rounded-full">
                <div className="bg-red-500 h-1 w-1/4 rounded-full"></div>
              </div>
            </div> */}
          </div>

           
      
    </AnimatedSection>
  </div>
);

const ClientResults = () => {
  const { title, clients } = data.clientResults;
  const [selectedClient, setSelectedClient] = useState(null);
  const navigate = useNavigate();
  const openModal = (client) => {
    setSelectedClient(client);
  };

  const closeModal = () => {
    setSelectedClient(null);
  };

  return (
    <section id="results" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 shadow-sm px-5 py-2 mb-4 border border-agency-orange/20">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Client Results</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6" dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }} />
          </AnimatedSection>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          {clients.slice(0, 3).map((client, index) => (
            <ClientCard
              key={index}
              client={client}
              index={index}
              onClick={() => navigate(`/case-studies/`)}
            />
          ))}
        </div>
      </div>

      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl p-8 shadow-xl">
            <button
              className="absolute top-4 right-4 text-agency-dark hover:text-agency-orange"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-agency-dark mb-4">{selectedClient.name}</h2>
            <p className="text-gray-600 mb-4">{selectedClient.overview}</p>
            {
              selectedClient?.challenges && (
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-agency-dark mb-2">Challenges</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedClient.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )
            }
            <div className="mb-4">
              <h3 className="text-xl font-bold text-agency-dark mb-2">Approach</h3>
              <ul className="list-disc list-inside text-gray-600">
                {selectedClient.approach.map((approach, index) => (
                  <li key={index}>{approach}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-agency-dark mb-2">Results</h3>
              <p className="text-gray-600">{selectedClient.results}</p>
            </div>
          </div>
        </div>
      )}
      <AnimatedSection delay={600} className="mt-8 sm:mt-12 text-center">
        <Button
          variant="outline"
          className="border-agency-orange bg-white hover:text-agency-orange/80 text-agency-orange hover:bg-agency-orange/10 px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base"
          onClick={() => window.open('https://volnovaportfolio.my.canva.site/case-studies', '_blank')}
        >
          View All Case Studies
          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </AnimatedSection>
    </section>
  );
};

export default ClientResults;
