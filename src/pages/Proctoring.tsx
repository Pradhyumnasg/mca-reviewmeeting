import { Users, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroBadge from "@/components/common/HeroBadge";

// Import faculty images
import prakashImg from "@/assets/faculty/prakash.jpg";
import subhashreeImg from "@/assets/faculty/subhashree.jpg";
import jenniferMaryImg from "@/assets/faculty/jennifer-mary.jpg";
import sharvaniImg from "@/assets/faculty/sharvani.jpg";
import sreelakshmiImg from "@/assets/faculty/sreelakshmi-joshi.jpg";
import hayathAliImg from "@/assets/faculty/hayath-ali.jpg";

interface Proctor {
  name: string;
  designation: string;
  email: string;
  image: string;
  students: Student[];
}

interface Student {
  rollNo: number;
  usn: string;
  name: string;
}

const sectionAProctors: Proctor[] = [
  {
    name: "Mr. Prakash Sarangamath",
    designation: "Asst Professor",
    email: "prakash.sarangamath@bitm.edu.in",
    image: prakashImg,
    students: [
      { rollNo: 1, usn: "22BI25MCA081-T", name: "A PAVANI" },
      { rollNo: 2, usn: "22BI25MCA007-T", name: "ABDUL RAZAK" },
      { rollNo: 3, usn: "22BI25MCA016-T", name: "ABHISHEK MAHANTESH AKKI" },
      { rollNo: 4, usn: "22BI25MCA075-T", name: "AISHWARYA B" },
      { rollNo: 5, usn: "22BI25MCA065-T", name: "AKHILA V K" },
      { rollNo: 6, usn: "22BI25MCA013-T", name: "AKHILESH G" },
      { rollNo: 7, usn: "22BI25MCA071-T", name: "AMRUTHA" },
      { rollNo: 8, usn: "22BI25MCA049-T", name: "ANJANA PRIYA" },
      { rollNo: 9, usn: "22BI25MCA060-T", name: "ANJINEYA K G" },
      { rollNo: 10, usn: "22BI25MCA094-T", name: "ARUNA JYOTHI" },
      { rollNo: 11, usn: "22BI25MCA029-T", name: "ASMA ANJUM" },
      { rollNo: 12, usn: "22BI25MCA036-T", name: "AYESHA NUFA" },
      { rollNo: 13, usn: "22BI25MCA040-T", name: "AYESHA SULTANA M" },
      { rollNo: 14, usn: "22BI25MCA078-T", name: "B MOUNESH" },
      { rollNo: 15, usn: "22BI25MCA046-T", name: "B SAITEJA" },
      { rollNo: 16, usn: "22BI25MCA101-T", name: "B J RANGANATH" },
    ],
  },
  {
    name: "Mrs. Subhashree S",
    designation: "Asst Professor",
    email: "subhashree@bitm.edu.in",
    image: subhashreeImg,
    students: [
      { rollNo: 17, usn: "22BI25MCA042-T", name: "BHAGAVAN REDDY P" },
      { rollNo: 18, usn: "22BI25MCA093-T", name: "BHAGYASHRI" },
      { rollNo: 19, usn: "22BI25MCA100-T", name: "BHUDHANUR BHUMIKA" },
      { rollNo: 20, usn: "22BI25MCA011-T", name: "BUDDAREDDY GARI RISHITHA REDDY" },
      { rollNo: 21, usn: "22BI25MCA018-T", name: "BUDURU RANJITHA" },
      { rollNo: 22, usn: "22BI25MCA105-T", name: "D AKHILA REDDY" },
      { rollNo: 23, usn: "22BI25MCA102-T", name: "D M ABHISHEK" },
      { rollNo: 24, usn: "22BI25MCA059-T", name: "FARIYA FATHIMA" },
      { rollNo: 25, usn: "22BI25MCA008-T", name: "FIRDOSE JAHAN K" },
      { rollNo: 26, usn: "22BI25MCA064-T", name: "G N SRINIVASA" },
      { rollNo: 27, usn: "22BI25MCA074-T", name: "GADILINGAPPA B R" },
      { rollNo: 28, usn: "22BI25MCA019-T", name: "GANESH B" },
      { rollNo: 29, usn: "22BI25MCA048-T", name: "GOUSIYA S" },
      { rollNo: 30, usn: "22BI25MCA097-T", name: "GOWTHAMI A" },
      { rollNo: 31, usn: "22BI25MCA038-T", name: "GURUPADI H" },
      { rollNo: 32, usn: "22BI25MCA084-T", name: "H S ABHISHEK" },
      { rollNo: 33, usn: "22BI25MCA021-T", name: "J PRAVALIKA" },
      { rollNo: 34, usn: "22BI25MCA037-T", name: "JAYA KRISHNA REDDY M" },
      { rollNo: 35, usn: "22BI25MCA043-T", name: "K GURURAJ" },
      { rollNo: 36, usn: "22BI25MCA054-T", name: "K MANASA DEVI" },
      { rollNo: 37, usn: "22BI25MCA047-T", name: "K MOHAMMED KHIZAR" },
      { rollNo: 38, usn: "22BI25MCA067-T", name: "KAVYA B" },
      { rollNo: 39, usn: "22BI25MCA083-T", name: "KEERTHI K" },
      { rollNo: 40, usn: "22BI25MCA104-T", name: "LAKSHMI B" },
      { rollNo: 41, usn: "22BI25MCA077-T", name: "LAKSHMI SHREYA M" },
      { rollNo: 42, usn: "22BI25MCA026-T", name: "M AMMULU" },
      { rollNo: 43, usn: "22BI25MCA090-T", name: "M HAZARA JENNIFER S" },
      { rollNo: 44, usn: "22BI25MCA082-T", name: "M NEELA" },
      { rollNo: 45, usn: "22BI25MCA027-T", name: "M VENKATESH" },
      { rollNo: 46, usn: "22BI25MCA035-T", name: "SAMIYA KHAN" },
      { rollNo: 47, usn: "22BI25MCA056-T", name: "SAMRIN TAJ S" },
    ],
  },
];

const sectionBProctors: Proctor[] = [
  {
    name: "Mrs. Jennifer Mary S",
    designation: "Asst Professor",
    email: "jennifermary@bitm.edu.in",
    image: jenniferMaryImg,
    students: [
      { rollNo: 48, usn: "22BI25MCA091-T", name: "M A TARASREE" },
      { rollNo: 49, usn: "22BI25MCA063-T", name: "M JOSHNA REDDY" },
      { rollNo: 50, usn: "22BI25MCA070-T", name: "MANOJ KUMAR" },
      { rollNo: 51, usn: "22BI25MCA085-T", name: "MASEERA FATHIMA M" },
      { rollNo: 52, usn: "22BI25MCA017-T", name: "MOHAMMED IMRAN" },
      { rollNo: 53, usn: "22BI25MCA087-T", name: "MOHAMMED SAMEER" },
      { rollNo: 54, usn: "22BI25MCA103-T", name: "MOHAMMED DANISH" },
      { rollNo: 55, usn: "22BI25MCA014-T", name: "MOHAMMED N ROSHAN ZAMEER" },
      { rollNo: 56, usn: "22BI25MCA001-T", name: "MULLANGI JAYACHANDRA" },
      { rollNo: 57, usn: "22BI25MCA072-T", name: "NANDINI V H" },
      { rollNo: 58, usn: "22BI25MCA024-T", name: "NEESHATH FATHIMA" },
      { rollNo: 59, usn: "22BI25MCA062-T", name: "NIKIL KUMAR K" },
      { rollNo: 60, usn: "22BI25MCA055-T", name: "NIKITHA B" },
      { rollNo: 61, usn: "22BI25MCA069-T", name: "PAVANKUMAR RAJASHEKHAR HIREMATH" },
      { rollNo: 62, usn: "22BI25MCA053-T", name: "PAVITRA R GANJIMATH" },
      { rollNo: 63, usn: "22BI25MCA044-T", name: "R HEMALATHA" },
    ],
  },
  {
    name: "Mrs. Sharvani",
    designation: "Asst Professor",
    email: "sharvan@bitm.edu.in",
    image: sharvaniImg,
    students: [
      { rollNo: 64, usn: "22BI25MCA009-T", name: "R SREEKARI" },
      { rollNo: 65, usn: "22BI25MCA050-T", name: "R K SHAILAJA" },
      { rollNo: 66, usn: "22BI25MCA004-T", name: "RAMESH K" },
      { rollNo: 67, usn: "22BI25MCA052-T", name: "RENUKA H S" },
      { rollNo: 68, usn: "22BI25MCA099-T", name: "S K PRAMEYA" },
      { rollNo: 69, usn: "22BI25MCA025-T", name: "SAI GANESH REDDY K" },
      { rollNo: 70, usn: "22BI25MCA086-T", name: "SANA AISHA A K" },
      { rollNo: 71, usn: "22BI25MCA045-T", name: "SANDEEP KULKARNI" },
      { rollNo: 72, usn: "22BI25MCA030-T", name: "SANDHYA" },
      { rollNo: 73, usn: "22BI25MCA089-T", name: "SHAIK JEELAN K" },
      { rollNo: 74, usn: "22BI25MCA096-T", name: "SHARANU" },
      { rollNo: 75, usn: "22BI25MCA092-T", name: "SHASHI KUMAR M" },
      { rollNo: 76, usn: "22BI25MCA066-T", name: "SHIVABASAV ASHOK JULAKATTI" },
      { rollNo: 77, usn: "22BI25MCA028-T", name: "SHRIJEET F GHOTNEKAR" },
      { rollNo: 78, usn: "22BI25MCA033-T", name: "SNEHA" },
      { rollNo: 79, usn: "22BI25MCA076-T", name: "SNEHA" },
    ],
  },
  {
    name: "Ms. Sreelakshmi Joshi",
    designation: "Asst Professor",
    email: "sreelakshmi.j@bitm.edu.in",
    image: sreelakshmiImg,
    students: [
      { rollNo: 80, usn: "22BI25MCA061-T", name: "SUSHMA J" },
      { rollNo: 81, usn: "22BI25MCA068-T", name: "SUSHMA KUMARI M" },
      { rollNo: 82, usn: "22BI25MCA023-T", name: "SWATHI B" },
      { rollNo: 83, usn: "22BI25MCA088-T", name: "T RENUKA" },
      { rollNo: 84, usn: "22BI25MCA032-T", name: "T TULASI" },
      { rollNo: 85, usn: "22BI25MCA095-T", name: "TAPAL ARSHIYA" },
      { rollNo: 86, usn: "22BI25MCA079-T", name: "U M NAGESHA SHARMA" },
      { rollNo: 87, usn: "22BI25MCA041-T", name: "U M PAVAN KUMAR" },
      { rollNo: 88, usn: "22BI25MCA034-T", name: "V MANASA" },
      { rollNo: 89, usn: "22BI25MCA051-T", name: "VARSHA H S" },
      { rollNo: 90, usn: "22BI25MCA080-T", name: "VARUNAKUMARA H G" },
      { rollNo: 91, usn: "22BI25MCA039-T", name: "VINAYAKA N" },
      { rollNo: 92, usn: "22BI25MCA006-T", name: "VINIT V M" },
      { rollNo: 93, usn: "22BI25MCA106-T", name: "MADHANKUMAR N B" },
      { rollNo: 94, usn: "22BI25MCA107-T", name: "SAMUEL U" },
      { rollNo: 95, usn: "22BI25MCA110-T", name: "PUTTI TARUN REDDY" },
    ],
  },
  {
    name: "Dr. Hayath Ali",
    designation: "Associate Professor",
    email: "dr.hayathali@bitm.edu.in",
    image: hayathAliImg,
    students: [
      { rollNo: 1, usn: "22BI25MCA002-T", name: "ANIKETH RAO JANAK" },
      { rollNo: 2, usn: "22BI25MCA010-T", name: "ANURAG VERMA" },
      { rollNo: 3, usn: "22BI25MCA022-T", name: "BOLLINENI ASWINI" },
      { rollNo: 4, usn: "22BI25MCA057-T", name: "G GANESH" },
      { rollNo: 5, usn: "22BI25MCA098-T", name: "P UMMAR FAROOQ" },
      { rollNo: 6, usn: "22BI25MCA073-T", name: "PAVAN KUMAR U" },
      { rollNo: 7, usn: "22BI25MCA020-T", name: "PRAMOD KUMAR D P" },
      { rollNo: 8, usn: "22BI25MCA015-T", name: "R YUGDEEP" },
      { rollNo: 9, usn: "22BI25MCA031-T", name: "RAKSHITHA T" },
      { rollNo: 10, usn: "22BI25MCA058-T", name: "USHARANI H K" },
      { rollNo: 11, usn: "22BI25MCA005-T", name: "YASAR ARAFATH" },
      { rollNo: 12, usn: "22BI25MCA108-T", name: "USHA" },
      { rollNo: 13, usn: "22BI25MCA109-T", name: "Y RASAMMA" },
    ],
  },
];

const ProctorCard = ({ proctor }: { proctor: Proctor }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = proctor.students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-xl border bg-card overflow-hidden">
      {/* Proctor Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary/20">
          <AvatarImage src={proctor.image} alt={proctor.name} className="object-cover" />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {proctor.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-foreground">{proctor.name}</h3>
          <p className="text-sm text-muted-foreground">{proctor.designation}</p>
          <p className="text-sm text-primary">{proctor.email}</p>
        </div>
        <div className="ml-auto text-right">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Users className="h-4 w-4" />
            {proctor.students.length} Students
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name or USN..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Students Table */}
      <div className="max-h-[400px] overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-muted">
            <TableRow>
              <TableHead className="w-16">R.No</TableHead>
              <TableHead className="w-40">USN</TableHead>
              <TableHead>Student Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.usn}>
                <TableCell className="font-medium">{student.rollNo}</TableCell>
                <TableCell className="font-mono text-sm">{student.usn}</TableCell>
                <TableCell>{student.name}</TableCell>
              </TableRow>
            ))}
            {filteredStudents.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                  No students found matching "{searchQuery}"
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const Proctoring = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-5xl">
            Proctoring / Mentorship
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-white/80">
            1st Year MCA Proctor List 2025-27 Batch
          </p>
        </div>
      </section>

      {/* Proctor List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="section-a" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="section-a">Section A</TabsTrigger>
              <TabsTrigger value="section-b">Section B</TabsTrigger>
            </TabsList>

            <TabsContent value="section-a">
              <div className="grid gap-8">
                {sectionAProctors.map((proctor) => (
                  <ProctorCard key={proctor.email} proctor={proctor} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="section-b">
              <div className="grid gap-8">
                {sectionBProctors.map((proctor) => (
                  <ProctorCard key={proctor.email} proctor={proctor} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Proctoring;
