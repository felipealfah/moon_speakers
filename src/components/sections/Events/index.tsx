import Image from 'next/image';

interface EventCardProps {
  title: string;
  location: string;
  imageUrl: string;
}

const EventCard = ({ title, location, imageUrl }: EventCardProps) => {
  return (
    <div className="relative w-[387px] h-[300px] rounded-xl overflow-hidden group">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-[104px] left-6 text-white">
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-sm text-white/80">{location}</p>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: 'Tech Summit 2025',
      location: 'San Francisco Convention Center',
      imageUrl: '/images/events/tech-summit.jpg'
    },
    {
      title: 'Innovation Workshop',
      location: 'Digital Innovation Hub',
      imageUrl: '/images/events/innovation-workshop.jpg'
    },
    {
      title: 'Leadership Conference',
      location: 'Business Center',
      imageUrl: '/images/events/leadership-conference.jpg'
    },
    {
      title: 'Networking Mixer',
      location: 'Sky Lounge',
      imageUrl: '/images/events/networking-mixer.jpg'
    },
    {
      title: 'Annual Hackathon',
      location: 'Tech Campus',
      imageUrl: '/images/events/annual-hackathon.jpg'
    },
    {
      title: 'Innovation Awards',
      location: 'Grand Hall',
      imageUrl: '/images/events/innovation-awards.jpg'
    }
  ];

  return (
    <section className="w-full bg-black py-[43px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <div className="relative">
            <div className="w-[50px] h-[3px] bg-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-2">Our Events</h2>
            <p className="text-base text-white">Professionals shaping our conversations</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[21px]">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              location={event.location}
              imageUrl={event.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events; 