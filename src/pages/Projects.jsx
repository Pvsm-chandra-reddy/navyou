import React from "react";

const projectsData = [
  {
    category: "Association with NABARD",
    projects: [
      { no: 1, name: "NABARD-WDF JM.Thanda Watershed", area: "3 Villages", beneficiaries: "-", amount: "80 Lakhs", start: "2024", end: "Ongoing", funding: "NABARD" },
      { no: 2, name: "NABARD-WDF Madapuram Watershed", area: "3 Villages", beneficiaries: "-", amount: "15.72 Lakhs", start: "2024", end: "Ongoing", funding: "NABARD APRO Hyderabad" },
      { no: 3, name: "NABARD-WDF", area: "3 Villages", beneficiaries: "-", amount: "180 Lakhs", start: "2021", end: "Ongoing", funding: "NABARD & JSW" },
      { no: 4, name: "CBBOs –FPOs", area: "2 Mandals", beneficiaries: "-", amount: "21 Lakhs", start: "2021", end: "Ongoing", funding: "NABCON, Hyderabad" },
      { no: 5, name: "Promotion of Farmer Producer Organisations", area: "6 FPOs, 6 Mandals", beneficiaries: "-", amount: "66 Lakhs", start: "2019", end: "Ongoing", funding: "NABARD AP RO – Hyderabad" },
      { no: 6, name: "Financial Literacy Programme", area: "-", beneficiaries: "1250", amount: "5.00 Lakhs", start: "2016", end: "2016", funding: "NABARD AP RO Hyderabad" },
      { no: 7, name: "Formation of 35 Farmers Clubs", area: "-", beneficiaries: "26", amount: "1.30 Lakhs", start: "2016", end: "2019", funding: "NABARD AP RO – Hyderabad" },
      { no: 8, name: "Sari-Rolling Training programme", area: "-", beneficiaries: "60", amount: "0.60 Lakhs", start: "2009", end: "2009", funding: "NABARD APRO – Hyderabad" },
      { no: 9, name: "Beautician’s Course under REDP", area: "-", beneficiaries: "60", amount: "0.60 Lakhs", start: "2010", end: "2010", funding: "NABARD APRO Hyderabad" },
      { no: 10, name: "Water Campaign Programme", area: "50 Villages", beneficiaries: "-", amount: "1.00 Lakh", start: "2017", end: "2017", funding: "NABARD APRO Hyderabad" },
      { no: 11, name: "Millet Cultivation, Grading, Packing & E-Marketing", area: "4 Villages", beneficiaries: "-", amount: "1.5 Lakh", start: "2023", end: "2024", funding: "NABARD APRO Hyderabad" },
    ]
  },
  {
    category: "Other Govt Programmes",
    projects: [
      { no: 1, name: "Rural Bridge School", area: "-", beneficiaries: "180 Children", amount: "3.52 Lakhs", start: "2005", end: "2007", funding: "DPEP" },
      { no: 2, name: "Matha Sisusamrakshana (Emergency Van)", area: "-", beneficiaries: "1200 Cases", amount: "3.84 Lakhs", start: "2005", end: "2007", funding: "Dept. of Health & Family Welfare" },
      { no: 3, name: "Mobile Medical Unit (MMU)", area: "-", beneficiaries: "42000 Out Patients", amount: "82.00 Lakhs", start: "2005", end: "2015", funding: "NRHM" },
      { no: 4, name: "AP Community Based Tank Management Project", area: "-", beneficiaries: "-", amount: "61.00 Lakhs", start: "2007", end: "2016", funding: "Minor Irrigation Dept. (World Bank)" },
      { no: 5, name: "NREGS Internal Social Audit", area: "-", beneficiaries: "200 Nos.", amount: "0.85 Lakhs", start: "2008", end: "2008", funding: "District Water Management Authority" },
      { no: 6, name: "Ground Water Awareness Camps", area: "-", beneficiaries: "200 Farmers", amount: "0.20 Lakhs", start: "2009", end: "2009", funding: "Ground Water Dept." },
      { no: 7, name: "Agriculture Training", area: "-", beneficiaries: "100", amount: "0.15 Lakhs", start: "2009", end: "2009", funding: "Bio-Tech Foundation" },
      { no: 8, name: "Telangana Road Sector Project", area: "-", beneficiaries: "145 Families", amount: "68.05 Lakhs", start: "2009", end: "Ongoing", funding: "R&B Dept. (World Bank)" },
      { no: 9, name: "Training of School Management Committees", area: "-", beneficiaries: "1654", amount: "1.08 Lakhs", start: "2012", end: "2012", funding: "Rajiv Vidya Mission" },
      { no: 10, name: "Training Water User Associations", area: "-", beneficiaries: "642", amount: "3.03 Lakhs", start: "2016", end: "2016", funding: "Water Resources Dept. (APCBTMP)" },
      { no: 11, name: "A.P Road Sector Project", area: "14 Villages, 5 Mandals", beneficiaries: "-", amount: "35.00 Lakhs", start: "2018", end: "Ongoing", funding: "R&B Dept. (ADB)" },
      { no: 12, name: "Maintaining Capacity Building Centres", area: "-", beneficiaries: "650 Members", amount: "27.00 Lakhs", start: "2018", end: "2019", funding: "Animal Husbandry Dept." },
      { no: 13, name: "AP Drought Mitigation Project (APDMP)", area: "20 Villages, 3 Mandals", beneficiaries: "-", amount: "136.00 Lakhs", start: "2018", end: "2020", funding: "Commissioner of Agriculture & IFAD" },
      { no: 14, name: "Capacity Building Training to Farmers", area: "2 States", beneficiaries: "-", amount: "10 Lakhs", start: "2023", end: "Ongoing", funding: "NIAM, Jaipur" }
    ]
  },
  {
    category: "CSR Projects",
    projects: [
      { no: 1, name: "Solid Waste Management", area: "2 Villages", beneficiaries: "-", amount: "1.90 Lakhs", start: "2023-24", end: "Ongoing", funding: "JSW Cement Pvt Ltd., Nandyal Dt." },
      { no: 2, name: "NABARD WDF Project (30% CSR Fund)", area: "4 Villages", beneficiaries: "-", amount: "54 Lakhs", start: "2021", end: "Ongoing", funding: "JSW Cement Pvt Ltd, Nandyala Dt" },
      { no: 3, name: "Suryodayam Project", area: "-", beneficiaries: "8412", amount: "70.988 Lakhs", start: "2016", end: "2021", funding: "SUZLON Foundation, Pune" },
      { no: 4, name: "Surya Project, Wanaparthy", area: "4 Villages", beneficiaries: "-", amount: "45.00 Lakhs", start: "2017", end: "2021", funding: "SUZLON Foundation, Pune" },
      { no: 5, name: "Gadivemula Dairy FPO", area: "10 Villages", beneficiaries: "-", amount: "23 Lakhs", start: "2023", end: "Ongoing", funding: "JSW Cement Ltd, Nandyala Dt" }
    ]
  },
  {
    category: "FCRA Funding",
    projects: [
      { no: 1, name: "Access to Justice program", area: "50 Villages", beneficiaries: "-", amount: "23 Lakhs", start: "2023", end: "Ongoing", funding: "Kailash Satyarthi Children Foundation" }
    ]
  }
];

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Projects</h1>
      {projectsData.map((section, i) => (
        <div key={i} className="mb-12">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">{section.category}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-300 shadow rounded overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2">No.</th>
                  <th className="px-4 py-2">Name of Project</th>
                  <th className="px-4 py-2">Area</th>
                  <th className="px-4 py-2">Beneficiaries</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Start Year</th>
                  <th className="px-4 py-2">End Year</th>
                  <th className="px-4 py-2">Funding Source</th>
                </tr>
              </thead>
              <tbody>
                {section.projects.map((proj, idx) => (
                  <tr key={idx} className="even:bg-gray-100">
                    <td className="border px-4 py-2 text-center">{proj.no}</td>
                    <td className="border px-4 py-2">{proj.name}</td>
                    <td className="border px-4 py-2">{proj.area}</td>
                    <td className="border px-4 py-2">{proj.beneficiaries}</td>
                    <td className="border px-4 py-2">{proj.amount}</td>
                    <td className="border px-4 py-2 text-center">{proj.start}</td>
                    <td className="border px-4 py-2 text-center">{proj.end}</td>
                    <td className="border px-4 py-2">{proj.funding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

