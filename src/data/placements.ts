export interface Placement {
  id: string;
  role: string;
  companyOrIndustry: string;
  location: string;
  count: number;
}

export const placementsData: Placement[] = [
  {
    id: "1",
    role: "Software Engineer",
    companyOrIndustry: "IT & Tech",
    location: "Kochi",
    count: 120,
  },
  {
    id: "2",
    role: "Registered Nurse",
    companyOrIndustry: "Healthcare",
    location: "Middle East",
    count: 85,
  },
  {
    id: "3",
    role: "Sales Executive",
    companyOrIndustry: "Retail",
    location: "Kerala",
    count: 200,
  },
  {
    id: "4",
    role: "Financial Analyst",
    companyOrIndustry: "Banking",
    location: "Bangalore",
    count: 45,
  },
  {
    id: "5",
    role: "HR Manager",
    companyOrIndustry: "Corporate",
    location: "Chennai",
    count: 30,
  },
  {
    id: "6",
    role: "Mechanical Engineer",
    companyOrIndustry: "Manufacturing",
    location: "Pune",
    count: 60,
  }
];

export const hiringPartners = [
  "Tech Mahindra",
  "TCS",
  "Infosys",
  "Wipro",
  "Cognizant",
  "HCL",
  "Aster Medcity",
  "Lulu Group"
];
