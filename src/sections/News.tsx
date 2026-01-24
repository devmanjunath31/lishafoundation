import { Newspaper, Calendar, Award, Megaphone } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      date: '2025-08-15',
      category: 'Achievement',
      title: 'Watershed Project Successfully Covers 500 Acres',
      excerpt:
        'Our watershed development initiative has successfully covered 500 acres across three villages, benefiting 200+ farmers with improved water retention and soil quality.',
      image: Award,
    },
    {
      date: '2025-07-20',
      category: 'Program Update',
      title: '150 Women Empowered Through SHG Formation',
      excerpt:
        'Five new Self Help Groups have been formed, bringing together 150 women from rural areas. These groups are now actively engaged in savings and income generation activities.',
      image: Newspaper,
    },
    {
      date: '2025-06-25',
      category: 'Announcement',
      title: '25 Children Rejoin School Through Education Program',
      excerpt:
        'Our school dropout prevention program has successfully brought 25 children back to school, ensuring they continue their education and build a better future.',
      image: Megaphone,
    },
    {
      date: '2025-06-06',
      category: 'Milestone',
      title: 'Lisha Charitable Seva Trust Officially Established',
      excerpt:
        'With great joy, we announce the official establishment of Lisha Charitable Seva Trust in Hurulihal, Tumkur District, marking the beginning of our journey towards community empowerment.',
      image: Calendar,
    },
  ];

  const upcomingEvents = [
    {
      date: '2025-09-15',
      title: 'Annual General Meeting',
      location: 'Trust Office, Doddabidare',
    },
    {
      date: '2025-09-25',
      title: 'Farmers Training Workshop',
      location: 'Community Hall, Multiple Villages',
    },
    {
      date: '2025-10-05',
      title: 'Women Empowerment Program Launch',
      location: 'Chikkabidare Village',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">News & Updates</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about our latest activities, achievements, and upcoming events
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => {
                const Icon = item.image;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="md:flex">
                      <div className="md:w-48 bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center p-8">
                        <Icon className="w-24 h-24 text-white" />
                      </div>
                      <div className="p-6 flex-grow">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            {item.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(item.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-700 leading-relaxed">{item.excerpt}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-green-600 mr-2" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-green-600 pl-4 py-2 hover:bg-green-50 transition-colors"
                  >
                    <p className="text-sm font-semibold text-green-600 mb-1">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <h4 className="font-bold text-gray-900 mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-green-100 mb-4 text-sm">
                Subscribe to our newsletter for monthly updates on our programs and impact.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Media Coverage</h3>
          <p className="text-center text-gray-600 mb-8">
            Our work has been featured in local and regional media
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 transition-colors text-center"
              >
                <Newspaper className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">Media Publication {index + 1}</p>
                <p className="text-sm text-gray-600 mt-2">Article or coverage details</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
