import React from 'react';

export const About = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">About Nava Youth Association (NYA)</h1>

      <p className="text-lg text-gray-700 mb-6">
        Nava Youth Association (NYA) has all necessary infrastructure including a well-furnished office,
        spacious premises for training, vehicles for mobility, and modern communication tools. NYA employs
        44 committed personnel including 2 Doctors, 8 Engineers, an Agricultural Science Postgraduate,
        and other graduates and technical staff. Additionally, 49 part-time personnel work in various villages,
        supported by expert consultants from various fields.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        NYA works collaboratively with government bodies and other NGOs, actively implementing development
        projects in Kurnool, Ananthapur, Godavari, and Telangana. Areas of work include Watershed Development,
        Soil & Moisture Conservation, Women & Child Health, Education, and Gender Development, among others.
        Their community-driven approach has gained widespread recognition and trust among stakeholders.
      </p>

      <section className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Vision</h2>
        <p className="text-gray-700">
          NYA envisions a just and harmonious society where men and women from deprived communities live
          with dignity in a sustainable environment.
        </p>
      </section>

      <section className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mission</h2>
        <p className="text-gray-700">
          To empower vulnerable communities by building their capacities and ensuring improved quality
          of life through collective action, sustainable practices, and optimal use of natural resources.
        </p>
      </section>

      <section className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Methodology</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Organizing communities to promote collective bargaining among agricultural and fisherfolk groups.</li>
          <li>Conducting advocacy campaigns for the rights of women and children.</li>
          <li>Promoting environmental conservation and resource management awareness.</li>
          <li>Upgrading life skills to enhance income and sustainability.</li>
          <li>Running health awareness campaigns and mobile medical services in rural areas.</li>
          <li>Facilitating participatory planning from the village level upwards.</li>
        </ul>
      </section>

      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Core Values</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Integrity</li>
          <li>Self-Reliance</li>
          <li>Transparency</li>
          <li>Openness to Learn and Share</li>
          <li>Participation and Democracy</li>
        </ul>
      </section>
    </div>
  );
};
