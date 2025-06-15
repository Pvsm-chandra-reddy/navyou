import React from "react";

export const Contact = () => {
  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const fullMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = "7032615783"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={sendWhatsAppMessage} className="bg-white shadow-lg p-6 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input name="name" type="text" placeholder="Your Name" className="w-full border px-4 py-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" type="email" placeholder="you@example.com" className="w-full border px-4 py-2 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" rows="5" placeholder="Your message..." className="w-full border px-4 py-2 rounded" required></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Send via WhatsApp
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6 text-sm leading-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Head Office:</h3>
            <p>Nava Youth Association</p>
            <p># 17-166, Opp Bus Depot, Puchhakayalamada Road</p>
            <p>Pathikonda Mandal – 518380, Kurnool District, Andhra Pradesh</p>
            <p>📞 +91 9100985723 / 9885425103 / 9100985723</p>
            <p>📧 <a href="mailto:Navayouth.sreedhar@gmail.com" className="text-blue-600">Navayouth.sreedhar@gmail.com</a></p>
            <p>🌐 <a href="https://www.navayouth.com" target="_blank" rel="noreferrer" className="text-blue-600">www.navayouth.com</a></p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Branch Offices:</h3>
            <p><strong>Anantapur:</strong> Gotkur (Post & Village), Kuderu Mandal, Anantapur – 515003</p>
            <p><strong>Telangana:</strong> H.NO: 17/138, Indira Nagar Colony, Paragi Road, Shadnagar – 509216</p>
            <p><strong>Rajahmundry:</strong> #52-13-8, Ramalayam Veedhi, Near Bhaskar Raj Hospital, Rajahmundry</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Project Offices:</h3>
            <p><strong>Suzlon - CSR Project:</strong> H No: 2/19, Near Excise Station, Kurnool Road, KOTHAKOTA – 509381, Wanaparthi District, Telangana</p>
            <p><strong>AP Road Sector Project:</strong> H No:15-213-1A, Danavaipeta, RAJHAMUNDRY – 533101, East Godavari, Andhra Pradesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};