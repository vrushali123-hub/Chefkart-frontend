/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const BlogTab = () => {
  const [activeTab, setActiveTab] = useState('Partner');
  const [visibleStart, setVisibleStart] = useState(0);

  const tabs = ['Partner', 'Must Read', 'Trending', 'Food Recipe', 'News'];

  const articles = [
    {
      id: 1,
      category: 'Pillars of ChefKart',
      title: 'जहाँ आपको इज्जत नहीं मिले, ChefKart उस घर में...',
      quote: 'अपने होम शेफ का सम्मान ChefKart के लिए सबसे ऊपर है!',
      description:
        'कस्टमर रेफेरेंसी होने से ChefKart ने दूसरे घर में काम दिलाया जहाँ सम्मान का बहुत ख्याल रखा जाता है।',
      author: '—अजनाबार बीबी शेख',
      date: 'June 8, 2023',
      readTime: '3 min',
      imageUrl:
        'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_10_at_4_17_36_PM_3a8dfffd4e.png&w=1920&q=75',
      type: 'quote',
    },
    {
      id: 2,
      category: 'Subi Kumari',
      title: 'Empowering the domestic working community',
      date: 'February 10, 2023',
      readTime: '3 min',
      imageUrl:
        'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=1920&q=75',
    },
  ];

  const blogsByTab = {
    Partner: [
      { id: 101, title: '6 things to keep in mind when hiring a cook for home', date: 'Nov 30, 2026', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_02_c103cf5073.webp&w=1920&q=75' },
      { id: 102, title: 'Empowering the domestic working community', date: 'Jul 10, 2026', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=1920&q=75' },
      { id: 103, title: 'How to find the best cook for home', date: 'Jun 5, 2026', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_01_d49831e21c.webp&w=1920&q=75' },
      { id: 104, title: 'How to Party When You are an Introvert', date: 'Jun 5, 2026', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fintrovert_final_a2f0c4690e.webp&w=1920&q=75' },
    ],
    'Must Read': [
      { id: 200, title: 'How to use a Home Chef Subscription to make cooking easier', date: 'Jan 5, 2023', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_image_82ea3de818.png&w=1920&q=75' },
      { id: 201, title: 'What to do when your cook is on leave?', date: 'Feb 12, 2023', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_24_at_3_54_55_PM_1d2b58b7d7.png&w=1920&q=75' },
      { id: 202, title: 'The Importance of Hiring the Best Cook for Home in Gurgaon/Noida', date: 'Feb 12, 2023', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FFood_d7b9aaa238.jpg&w=1920&q=75' },
      { id: 203, title: 'Spice Up Your Next Party with Fun Party Games', date: 'Feb 12, 2023', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2F1256_x_568_98d8d86af3.jpg&w=1920&q=75' },
    ],
    Trending: [
      { id: 300, title: 'ChefKart’s most-loved one-time cooking service, Chefit.', date: 'Mar 3, 2023', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fblog_banner_02_c53b8b734b.webp&w=1920&q=75' },
     { id: 301, title: 'Accio Potterheads! Here are Magical Delights from the Harry Potter Series to Send You to the Wizarding World', date: 'Apr 7, 2023', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FHP_F1_philosophers_stone_great_hall_halloween_floating_pumpkins_feast_web_landscape_25931ea743.jpeg&w=1920&q=75' },
     { id: 302, title: 'What To Expect From A ChefKart Cook?', date: 'Apr 7, 2023', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FWhat_to_expect_from_a_Chef_Kart_cook_e9f35e2867.png&w=1920&q=75 ' },
     { id: 303, title: 'The Ultimate Guide To Partying with ChefKart', date: 'Apr 7, 2023', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_1_42060b9312.webp&w=1920&q=75' },
    ],
    'Food Recipe': [
     { id: 401, title: 'Must-Try Indian Breakfast Recipes to Start Your Day Right ', date: 'May 5, 2023', readTime: '2 min', imageUrl:  'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fbreakfast_final_8f4844b3ed.webp&w=1920&q=75' },
     { id: 402, title: 'जानिये सुपरफूड्स क्या हैं और उनके लाभ  ', date: 'May 5, 2023', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSuperfoods_Good_Flour_blog_6b225efd3b.webp&w=1920&q=75' },
    { id: 403, title: 'Paneer Butter Masala ', date: 'May 5, 2023', readTime: '2 min', imageUrl: 'https://eastindianrecipes.net/wp-content/uploads/2024/01/Paneer-Butter-Masala-Recipe1.jpg ' },
     {id: 404, title:  'Wedding Rice – Fruit and Nut Rice ', date: 'Jun 9, 2023', readTime: '3 min', imageUrl: 'https://eastindianrecipes.net/wp-content/uploads/2020/02/East-Indian-Wedding-Rice-with-Fruit-and-Nuts-Recipe7.jpg' },
    ],
    News: 
    [
     { id: 501, title: '6 things to keep in mind when hiring a cook for home', date: 'Nov 30, 2026', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_02_c103cf5073.webp&w=1920&q=75' },
      { id: 502, title: 'Empowering the domestic working community', date: 'Jul 10, 2026', readTime: '3 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=1920&q=75' },
      { id: 503, title: 'How to find the best cook for home', date: 'Jun 5, 2026', readTime: '2 min', imageUrl: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_01_d49831e21c.webp&w=1920&q=75' },


    //  { id: 501, title: '        ', date: 'Jul 10, 2023', readTime: '2 min', imageUrl: ' ' },
    //   { id: 502, title: '   ', date: 'Jul 10, 2023', readTime: '2 min', imageUrl: '' },
    // { id: 503, title: ' ', date: 'Jul 10, 2023', readTime: '2 min', imageUrl: ' ' },
    // //  { id: 504, title: '  ', date: 'Aug 12, 2023', readTime: '3 min', imageUrl: ' ' },
    ],
  };

  const blogs = blogsByTab[activeTab] || [];
  const visibleCount = 3; // show 3 cards at once
  const prev = () => setVisibleStart(prev => Math.max(prev - 1, 0));
  const next = () => setVisibleStart(prev => Math.min(prev + 1, blogs.length - visibleCount));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setVisibleStart(0); }}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-purple-900 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {articles.map(article => (
          <div key={article.id} className="rounded-lg shadow-lg overflow-hidden">
            <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover" />
            <div className="p-4 bg-white">
              <p className="text-sm text-gray-500">{article.category}</p>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              {article.type === 'quote' && (
                <>
                  <p className="italic text-gray-700 mb-2">{article.quote}</p>
                  <p className="text-gray-600 mb-2">{article.description}</p>
                  <p className="text-gray-500">{article.author}</p>
                </>
              )}
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Articles */}
      <h3 className="text-2xl font-bold mb-4">Recommended Articles</h3>
      <div className="flex items-center gap-2">
        <button onClick={prev} className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">&lt;</button>

        <div className="flex gap-4 flex-1">
          {blogs.slice(visibleStart, visibleStart + visibleCount).map((item, index) => (
            <div key={`${activeTab}-${item.id}-${index}`} className="w-80 rounded-lg shadow-lg overflow-hidden bg-white">
              <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 text-base">{item.title}</h4>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={next} className="bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300">&gt;</button>
      </div>
    </div>
  );
};

export default BlogTab;
