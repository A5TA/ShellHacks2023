
import RedCross from '../assets/RedCross.jpeg';
import RedCross from '/src/assets/RedCross.jpeg';

import Unicef from '../assets/Unicef.png'; 
import SalvationArmy from '../assets/Salvation.png';
import Habitat from '../assets/Habitat.png';
import worldfood from '../assets/WorldFood.png';
import doctors from '../assets/Doctors.jpeg';

const Charities = () => {
  const charities = [
    {
      name: 'Red Cross',
      description: 'A humanitarian organization that provides emergency assistance, disaster relief, and education.',
      logo: RedCross,
      website: 'https://www.redcross.org',
    },
    {
      name: 'UNICEF',
      description: 'An agency of the United Nations responsible for providing humanitarian and developmental aid to children worldwide.',
      logo: Unicef,
      website: 'https://www.unicef.org',  
    },
    {
      name: 'The Salvation Army',
      description: 'An international charitable organization that provides food distribution, disaster relief, rehabilitation centers, anti-human trafficking efforts, and a wealth of children\'s programs.',
      logo: SalvationArmy,
      website: 'https://www.salvationarmy.org',  
    },
    {
      name: 'Habitat for Humanity',
      description: 'A nonprofit organization that helps families build and improve places to call home.',
      logo: Habitat,
      website: 'https://www.habitat.org',  
    },
    {
    name: 'World Food Programme (WFP)',
    description: 'The food assistance branch of the United Nations and the world\'s largest humanitarian organization addressing hunger and promoting food security.',
    logo: worldfood, 
    website: 'https://www.wfp.org',
  },
  {
    name: 'Doctors Without Borders',
    description: 'An international humanitarian medical non-governmental organization of French origin best known for its projects in conflict zones and in countries affected by endemic diseases.',
    logo: doctors,
    website: 'https://www.doctorswithoutborders.org',
  },
  
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {charities.map((charity, index) => (
        <a key={index} href={charity.website} target="_blank" rel="noopener noreferrer" className="block bg-white shadow-lg rounded-lg p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" style={{
          backgroundColor: 'rgba(0, 0, 255, 0.05)', 
          color: 'white', 
          border: '1px solid white',
          textDecoration: 'none', 
        }}>
          <img className="w-16 h-16 mb-4 rounded-full mx-auto" src={charity.logo} alt={`${charity.name} logo`} />
          <h2 className="text-2xl text-center mb-2">{charity.name}</h2>
          <p className="text-center">{charity.description}</p>
        </a>
      ))}
    </div>
  );
};

export default Charities;
