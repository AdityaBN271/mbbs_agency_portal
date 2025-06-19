import { Link } from "react-router-dom";
import { useState } from "react";

function CurriculumAccordion() {
  const semesters = [
    {
      title: "1st Semester",
      subjects: [
        "Body Structure (Anatomy, Histology, Imaging) – Musculoskeletal System",
        "Cell Biology & Medical Biophysics",
        "Introduction to Psychology",
        "CAPS 1 & Medical Ethics",
        "Body Function (Intro to Physiology & Biochemistry)"
      ],
    },
    {
      title: "2nd Semester",
      subjects: [
        "Body Structure 2 (Anatomy, Histology, Imaging)",
        "Body Function 2 (Physiology & Biochemistry)",
        "CAPS 2",
        "Research Skills (Reasoning)",
        "Electives: History of Medicine, Cultural Studies, English for Healthcare Professionals 1"
      ],
    },
    {
      title: "3rd Semester",
      subjects: [
        "Body Structure 3 (Anatomy, Histology, Imaging) – Cardiopulmonary",
        "Neuroscience (Physiology & Biochemistry)",
        "CAPS 3",
        "Health Informatics"
      ],
    },
    {
      title: "4th Semester",
      subjects: [
        "Body Structure 4",
        "Body Function 4",
        "CAPS 4",
        "Immunology",
        "Health & Society 1",
        "Electives: Philosophy, Sociology, English for Healthcare Professionals 2"
      ],
    },
    {
      title: "5th Semester",
      subjects: [
        "Basics of Clinical Science (Pathology & Pharmacology)",
        "Methods of Physical Diagnosis, Radiology & Lab 1",
        "CAPS 5",
        "Research Skills 2",
        "Health and Defence 1 (Microbiology & Intro to Infectious Diseases)",
        "Electives: Health System & Policies, Psychosociology & Health Psychology"
      ],
    },
    {
      title: "6th Semester",
      subjects: [
        "Basics of Clinical Sciences 2",
        "Methods of Physical Diagnosis, Radiology & Lab 2",
        "CAPS 6",
        "Health and Defence 2 (Microbiology, Virology, Parasitology & Pharmacology)",
        "Health & Society 2",
        "Electives: Cancer Biology, Drug Abuse"
      ],
    },
    {
      title: "7th Semester",
      subjects: [
        "Internal Medicine 1 (CVS, Pulmonary, Urinary Systems)",
        "Life Control (Neurology, Psychology, Neurorehabilitation)",
        "Surgery 1",
        "CAPS 7",
        "Research Skills 3",
        "Electives: ECG, Nutrition"
      ],
    },
    {
      title: "8th Semester",
      subjects: [
        "Internal Medicine 2",
        "Clinical Psychology",
        "Surgery 2",
        "Health & Society 3",
        "CAPS 8",
        "Electives: Enzymology, Hepatology"
      ],
    },
    {
      title: "9th Semester",
      subjects: [
        "Life Protection",
        "Communicable Diseases 1",
        "CAPS 9",
        "Maternal & Newborn Health",
        "Surgery 3",
        "Internal Medicine 3"
      ],
    },
    {
      title: "10th Semester",
      subjects: [
        "Internal Medicine 4",
        "Communicable Diseases 2",
        "Maternal & Child Health",
        "CAPS 10",
        "Forensic Medicine",
        "Health & Society 4",
        "Leadership & Advanced Course"
      ],
    },
    {
      title: "11th Semester",
      subjects: [
        "Personalized Medicine",
        "Clinical & Intensive Care",
        "CAPS 11",
        "Research Skills 5",
        "Electives: Child Surgery, Sexual Medicine, Pediatric Neurology"
      ],
    },
    {
      title: "12th Semester",
      subjects: [
        "Internship: Internal Medicine",
        "Internship: Surgery",
        "Family Medicine",
        "Patient Safety",
        "CAPS 12",
        "Note: Georgian classes and exams are conducted every semester."
      ],
    }
  ];

  const [active, setActive] = useState(null);
  const toggle = (index) => setActive(active === index ? null : index);

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">MBBS Curriculum Overview</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {semesters.map((sem, index) => (
          <div key={index} className="border rounded">
            <button onClick={() => toggle(index)} className="w-full text-left px-6 py-4 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold">
              {sem.title}
            </button>
            {active === index && (
              <ul className="px-6 py-3 list-disc text-gray-700 space-y-1">
                {sem.subjects.map((subject, idx) => <li key={idx}>{subject}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


function YearlyFeeStructure() {
  const data = [
    { year: "1st Year", s1: 2950, s2: 2950 },
    { year: "2nd Year", s1: 2950, s2: 2950 },
    { year: "3rd Year", s1: 2950, s2: 2950 },
    { year: "4th Year", s1: 2950, s2: 2950 },
    { year: "5th Year", s1: 2950, s2: 2950 },
    { year: "6th Year", s1: 2950, s2: 2950 },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        University Fee Structure
      </h2>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full border border-gray-300 text-center">
          <thead className="bg-blue-100 text-blue-800 text-lg font-semibold">
            <tr>
              <th className="p-4 border">Year</th>
              <th className="p-4 border">Semester 1</th>
              <th className="p-4 border">Semester 2</th>
              <th className="p-4 border">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-base">
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 border font-medium">{row.year}</td>
                <td className="p-4 border">{row.s1} USD</td>
                <td className="p-4 border">{row.s2} USD</td>
                <td className="p-4 border font-semibold">
                  {row.s1 + row.s2} USD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


function EligibilityDocuments() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Eligibility Criteria & Required Documents</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">✅ Eligibility Criteria</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Must be 17 years or older</li>
            <li>Minimum 50% marks in PCB (12th standard)</li>
            <li>Qualified NEET exam</li>
            <li>Fluent in English (spoken and written)</li>
            <li>Valid Passport</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">📄 Required Documents</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>10th & 12th Marksheet (original + copy)</li>
            <li>NEET scorecard</li>
            <li>Passport (front & back scan)</li>
            <li>Passport-size photographs (10)</li>
            <li>Medical Fitness Certificate</li>
            <li>Police Clearance Certificate</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function AdmissionSteps() {
  const steps = [
    "Submit your application online",
    "Receive admission letter from university",
    "Pay tuition & secure visa documents",
    "Apply for student visa (with our help)",
    "Fly to Georgia and join your university!",
  ];

  return (
    <section className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Admission Process</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2">
              {index + 1}
            </div>
            <p className="text-gray-700 text-sm max-w-[150px]">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
function ContactSection() {
  return (
    <section className="bg-blue-700 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        <div className="text-center">
          <p className="text-lg">📞 Phone: <a href="tel:+919019439545" className="underline">+91 9019439545 (Whatsapp Only)</a></p>
          <p className="text-lg">📧 Email: <a href="mailto:guruys513@gmail.com" className="underline">guruys513@gmail.com</a></p>
          <p className="text-lg">📍 Office: Sira Tumkur</p>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://wa.me/9019439545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded shadow transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
function AboutUs() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">About Us</h2>
      <div className="max-w-4xl mx-auto text-gray-700 text-lg space-y-4">
        <p>
          We are a group of professionals dedicated to helping students secure direct MBBS admission at Georgian National University SEU — without middlemen, false promises, or hidden charges.
        </p>
        <p>
          Unlike agencies that mislead with "guaranteed scholarships" or "assistance till degree" scams, we focus on genuine support through every stage:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li> Transparent documentation</li>
          <li> Visa and EQE assistance</li>
          <li> Honest fee breakdown</li>
          <li>Real support post-arrival</li>
        </ul>
        <p>
          Our mission is simple: make your medical dream come true with clarity, integrity, and zero complications.
        </p>
      </div>
    </section>
  );
}

function ServicePoints() {
  const services = [
    "Interview (Written & Oral)",
    "1 Year Health Insurance",
    "Guaranteed University Admission",
    "Complete Document Translation",
    "Accreditation Support",
    "Rector's Degree", 
    "EQE (Educational Quality Enhancement) Assistance",
    "Ministry of Education Order",
    "University Acceptance Letter",
    "University Email ID & EMIS Portal Access",
    "Indian Study Visa Processing",
    "Georgian Bank Account Setup",
    "Georgian SIM Card",
    "Airport Pickup from Tbilisi Airport"
  ];

  return (
    <section className="bg-blue-50 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Our Services</h2>
      <div className="max-w-4xl mx-auto text-gray-700 text-base">
        <p className="text-center text-lg mb-4">
          We offer a complete all-inclusive MBBS support package for <span className="font-semibold">$3250 USD</span> (payable in two parts).
        </p>
        <ul className="list-disc pl-6 space-y-2">
          {services.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-gray-600 text-center">
            * Flight tickets and accommodation not included.<br />
            * TRC (Temporary Residence Card) after arrival: $390 USD<br />
            * Under 18: Additional fee of $120 USD<br />
            * Affordable guidance Fee (1,00,000 INR)
          
        </p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="bg-white bg-opacity-80 p-6 rounded shadow max-w-2xl w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-700">
            Study MBBS in Georgia
          </h1>
          <p className="mt-4 text-gray-700 text-lg text-center">
            NMC-approved universities · Globally recognized degree · Affordable fees · No donation
          </p>
          <div className="mt-6">
            <Link
              to="/apply"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-lg transition inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ ADD THIS LINE */}
      <AboutUs />

      







      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Why MBBS in Georgia?</h2>
        <div className="max-w-4xl mx-auto border-l-4 border-blue-600 pl-6 space-y-10">
          <div><h3 className="text-xl font-semibold text-gray-800">✅ NMC & WHO Recognized Universities</h3><p className="text-gray-600">Degrees are valid in India and globally. No need to worry about recognition.</p></div>
          <div><h3 className="text-xl font-semibold text-gray-800">💰 Affordable Tuition & No Donations</h3><p className="text-gray-600">Much lower cost than Indian private colleges. No hidden charges or capitation fees.</p></div>
          <div><h3 className="text-xl font-semibold text-gray-800">🗣️ English Medium Curriculum</h3><p className="text-gray-600">All lectures, exams, and clinical rotations are in English.</p></div>
          <div><h3 className="text-xl font-semibold text-gray-800">🌍 European Lifestyle & Multicultural Environment</h3><p className="text-gray-600">Modern campuses, European quality of life, and a safe environment for Indian students.</p></div>
          <div><h3 className="text-xl font-semibold text-gray-800">🧪 No Entrance Exams (Except NEET)</h3><p className="text-gray-600">You only need NEET qualification — no other entrance test is required.</p></div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Featured University</h2>
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                <img
    src="/images/unversity.jpg"
    alt="SEU University"
    
  />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-semibold text-blue-700">Georgian National University – SEU</h3>
              <p className="mt-2 text-gray-700">One of the top medical universities in Georgia, located in Tbilisi. SEU is known for its modern infrastructure, Indian student support, English-medium teaching, and globally recognized MBBS degree.</p>
              <ul className="mt-4 list-disc pl-5 text-gray-600 space-y-1">
                <li>6-Year MBBS Program</li>
                <li>NMC & WHO Approved</li>
                <li>No Donation / Capitation</li>
                <li>1000+ Indian students currently enrolled</li>
              </ul>
              <Link to="/apply" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Apply to SEU</Link>
            </div>
          </div>
        </div>
      </section>

      <CurriculumAccordion />
      <YearlyFeeStructure />
      <ServicePoints />

      <EligibilityDocuments />
      <AdmissionSteps />
      <ContactSection />
    </>
  );
}

export default Home;