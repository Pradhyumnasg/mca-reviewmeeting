import FacultyCard from "@/components/public/FacultyCard";
import HeroBadge from "@/components/common/HeroBadge";

// Import faculty images
import girishKumarImg from "@/assets/faculty/girish-kumar.jpg";
import hayathAliImg from "@/assets/faculty/hayath-ali.jpg";
import jenniferMaryImg from "@/assets/faculty/jennifer-mary.jpg";
import mmHarshithaImg from "@/assets/faculty/mm-harshitha.jpg";
import nidaFatimaImg from "@/assets/faculty/nida-fatima.jpg";
import prakashImg from "@/assets/faculty/prakash.jpg";
import sharvaniImg from "@/assets/faculty/sharvani.jpg";
import sreelakshmiImg from "@/assets/faculty/sreelakshmi-joshi.jpg";
import subhashreeImg from "@/assets/faculty/subhashree.jpg";
import pawanKumarImg from "@/assets/faculty/pawan-kumar.jpg";
import vamshiImg from "@/assets/faculty/vamshi.jpg";
import pradhyumnImg from "@/assets/faculty/pradhyumn-sg.png";

const facultyData = [
  {
    name: "Dr. Girish Kumar D",
    designation: "Professor & HOD",
    teachingExp: "18 Years",
    email: "girishkumar@bitm.edu.in",
    image: girishKumarImg,
  },
  {
    name: "Dr. Hayath Ali",
    designation: "Associate Professor",
    teachingExp: "16 Years",
    email: "dr.hayathali@bitm.edu.in",
    image: hayathAliImg,
  },
  {
    name: "Mrs. Sharvani",
    designation: "Asst Professor",
    teachingExp: "11 Years",
    email: "sharvan@bitm.edu.in",
    image: sharvaniImg,
  },
  {
    name: "Mrs. Subhashree S",
    designation: "Asst Professor",
    teachingExp: "3 Years",
    email: "subhashree@bitm.edu.in",
    image: subhashreeImg,
  },
  {
    name: "Mrs. Jennifer Mary S",
    designation: "Asst Professor",
    teachingExp: "8 Years",
    email: "jennifermary@bitm.edu.in",
    image: jenniferMaryImg,
  },
  {
    name: "Mr. Prakash Sarangamath",
    designation: "Asst Professor",
    teachingExp: "12 Years",
    email: "prakash.sarangamath@bitm.edu.in",
    image: prakashImg,
  },
  {
    name: "Ms. MM Harshitha",
    designation: "Asst Professor",
    teachingExp: "3 Years",
    email: "harshitha@bitm.edu.in",
    image: mmHarshithaImg,
  },
  {
    name: "Ms. Sreelakshmi Joshi",
    designation: "Asst Professor",
    teachingExp: "0-1 Year",
    email: "sreelakshmi.j@bitm.edu.in",
    image: sreelakshmiImg,
  },
  {
    name: "Mr. Pradhyumn SG",
    designation: "Asst Professor",
    teachingExp: "0-1 Year",
    email: "pradhyumna@bitm.edu.in",
    image: pradhyumnImg,
  },
  {
    name: "Ms. Nida Fatima K",
    designation: "Asst Professor",
    teachingExp: "0-1 Year",
    email: "nidakhan18122000@bitm.edu.in",
    image: nidaFatimaImg,
  },
];

const nonFacultyData = [
  {
    name: "Mr. Pavan Kumar",
    designation: "Instructor",
    teachingExp: "3 Years",
    email: "pavanym@bitm.edu.in",
    image: pawanKumarImg,
  },
  {
    name: "Mr. Vamshi",
    designation: "Attender",
    image: vamshiImg,
  },
];

const Faculty = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Our Faculty
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            Meet our experienced professors and researchers dedicated to shaping
            future tech leaders
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Faculty Members
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facultyData.map((faculty) => (
              <FacultyCard key={faculty.email} {...faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Non-Faculty Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Non-Teaching Staff
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nonFacultyData.map((staff) => (
              <FacultyCard key={staff.email} {...staff} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Faculty;
