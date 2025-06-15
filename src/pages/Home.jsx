import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const boardMembers = [
    { no: 1, name: "Mr.K.Venugopal Reddy", qualification: "Electronics Diploma", designation: "President" },
    { no: 2, name: "Ms.T.Prasanna Lakshmi", qualification: "B.Com", designation: "Secretary" },
    { no: 3, name: "Mr.C.Bhaskar Reddy", qualification: "M.A. Sociology", designation: "Treasurer" },
    { no: 4, name: "Mr.H.Mallanna", qualification: "Diploma in Civil Engineer", designation: "EC Member" },
    { no: 5, name: "Ms.T. Lakshmana Naidu", qualification: "B.Tech", designation: "EC Member" },
    { no: 6, name: "Ms.P.Mary Aruna", qualification: "MA", designation: "EC Member" },
    { no: 7, name: "Mr.B.Mothilal Naik", qualification: "MSCIS/MSW/PGDPM", designation: "EC Member" },
    { no: 8, name: "Mr.U.Narasimhulu", qualification: "MA Sociology", designation: "EC Member" },
    { no: 9, name: "Mr. B Naga Siva sankar Reddy", qualification: "Degree", designation: "EC Member" }
  ];

  const sliderImages = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg"
  ];

  const testimonials = [
    { name: "Anjali R.", message: "NYA helped me get back to school. I’m so thankful for their support!" },
    { name: "Ravi Kumar", message: "Volunteering here changed my life. They truly make a difference." },
    { name: "Lakshmi N.", message: "I’ve seen real progress in our village thanks to NYA’s programs." }
  ];

  const newsEvents = [
    { title: "Youth Skill Development Workshop", date: "June 5, 2025", description: "A 3-day workshop empowering local youth with job-oriented skills." },
    { title: "Health Camp Conducted", date: "May 20, 2025", description: "Free medical check-ups and awareness sessions for rural families." },
    { title: "Tree Plantation Drive", date: "April 10, 2025", description: "Over 1,000 trees planted in partnership with local schools." }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-10 text-center drop-shadow-md">Welcome to Nava Youth Association</h1>

      {/* Image Slider */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Our Activities</h2>
        <Slider {...sliderSettings}>
          {sliderImages.map((src, index) => (
            <div key={index} className="px-3">
              <img src={src} alt={`Slide ${index}`} className="w-full h-72 object-cover rounded-xl shadow-md border border-blue-200" />
            </div>
          ))}
        </Slider>
      </section>

      {/* News & Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">News & Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newsEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-blue-100 p-6 rounded-xl shadow text-center">
              <p className="italic text-gray-800 mb-4">“{item.message}”</p>
              <h4 className="text-blue-900 font-bold">— {item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Board Members */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Board Members</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white rounded-xl shadow-lg border border-blue-100">
            <thead className="bg-blue-200 text-blue-900">
              <tr>
                <th className="px-6 py-3 text-left text-md font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Name of Office Bearer</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Qualification</th>
                <th className="px-6 py-3 text-left text-md font-semibold">Designation</th>
              </tr>
            </thead>
            <tbody>
              {boardMembers.map((member) => (
                <tr key={member.no} className="border-b hover:bg-blue-50">
                  <td className="px-6 py-3 text-sm text-gray-800">{member.no}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{member.name}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{member.qualification}</td>
                  <td className="px-6 py-3 text-sm text-gray-800">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-16">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Support Our Cause</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          Help us uplift underprivileged communities through education, empowerment, and sustainable development programs.
        </p>
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transform transition duration-300">
          Donate Us
        </button>
      </section>
    </div>
  );
};

export default Home;
