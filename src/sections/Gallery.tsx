import { Image, Video, Calendar } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos' | 'events'>('photos');

  const categories = [
    'Education Programs',
    'Women Empowerment',
    'Livelihood Programs',
    'Agriculture',
    'Watershed Projects',
    'Training Sessions',
    'Events',
    'Team Photos',
  ];

  const events = [
    {
      date: '2025-06-06',
      title: 'Trust Foundation Day',
      description: 'Inauguration ceremony of Lisha Charitable Seva Trust',
    },
    {
      date: '2025-07-15',
      title: 'SHG Formation Workshop',
      description: 'Training program for 50 women on Self Help Group formation',
    },
    {
      date: '2025-08-20',
      title: 'Watershed Project Launch',
      description: 'Launch of watershed development in 3 villages',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing moments of transformation and community impact
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border-2 border-gray-200 p-1">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'photos'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Image className="w-5 h-5 inline-block mr-2" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'videos'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Video className="w-5 h-5 inline-block mr-2" />
              Videos
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'events'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Calendar className="w-5 h-5 inline-block mr-2" />
              Events
            </button>
          </div>
        </div>

        {activeTab === 'photos' && (
          <div>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                    <div className="text-center">
                      <Image size={48} className="mx-auto mb-2" />
                      <p className="text-sm">Program Photo {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                  <Video size={64} />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Program Video {index + 1}</h4>
                  <p className="text-sm text-gray-600">
                    Showcasing our work in rural communities
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-600"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-center">
                    <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="flex-grow ml-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Follow us on social media for more updates and behind-the-scenes content
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
            >
              f
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
            >
              in
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
            >
              yt
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
