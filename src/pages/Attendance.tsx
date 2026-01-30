import { useState } from "react";
import {
  Users,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter,
} from "lucide-react";
import HeroBadge from "@/components/common/HeroBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Section A Data (1st Semester)
const sectionAStudents = [
  { rollNo: 1, usn: "22BI25MCA081-T", name: "A PAVANI", psc: { marks: 40, att: 100 }, dms: { marks: 36, att: 100 }, dbms: { marks: 27, att: 98 }, os: { marks: 44, att: 100 }, wt: { marks: 34, att: 90 }, rmIpr: { marks: 38, att: 96 } },
  { rollNo: 2, usn: "22BI25MCA007-T", name: "ABDUL RAZAK", psc: { marks: 48, att: 98 }, dms: { marks: 32, att: 85 }, dbms: { marks: 40, att: 93 }, os: { marks: 42, att: 87 }, wt: { marks: 47, att: 90 }, rmIpr: { marks: 43, att: 91 } },
  { rollNo: 3, usn: "22BI25MCA016-T", name: "ABHISHEK MAHANTESH AKKI", psc: { marks: 34, att: 68 }, dms: { marks: 29, att: 65 }, dbms: { marks: 41, att: 81 }, os: { marks: 31, att: 83 }, wt: { marks: 39, att: 79 }, rmIpr: { marks: 38, att: 73 } },
  { rollNo: 4, usn: "22BI25MCA075-T", name: "AISHWARYA B", psc: { marks: 48, att: 98 }, dms: { marks: 43, att: 75 }, dbms: { marks: 48, att: 91 }, os: { marks: 47, att: 97 }, wt: { marks: 50, att: 90 }, rmIpr: { marks: 42, att: 91 } },
  { rollNo: 5, usn: "22BI25MCA065-T", name: "AKHILA V K", psc: { marks: 50, att: 91 }, dms: { marks: 50, att: 85 }, dbms: { marks: 46, att: 86 }, os: { marks: 47, att: 83 }, wt: { marks: 47, att: 83 }, rmIpr: { marks: 46, att: 90 } },
  { rollNo: 6, usn: "22BI25MCA013-T", name: "AKHILESH G", psc: { marks: 49, att: 98 }, dms: { marks: 44, att: 70 }, dbms: { marks: 42, att: 79 }, os: { marks: 42, att: 77 }, wt: { marks: 49, att: 83 }, rmIpr: { marks: 48, att: 71 } },
  { rollNo: 7, usn: "22BI25MCA071-T", name: "AMRUTHA", psc: { marks: 50, att: 62 }, dms: { marks: 41, att: 70 }, dbms: { marks: 48, att: 72 }, os: { marks: 50, att: 67 }, wt: { marks: 50, att: 79 }, rmIpr: { marks: 50, att: 72 } },
  { rollNo: 8, usn: "22BI25MCA002-T", name: "ANIKETH RAO JANAK", psc: { marks: 31, att: 52 }, dms: { marks: 26, att: 50 }, dbms: { marks: 45, att: 58 }, os: { marks: 31, att: 50 }, wt: { marks: 40, att: 48 }, rmIpr: { marks: 39, att: 40 } },
  { rollNo: 9, usn: "22BI25MCA049-T", name: "ANJANA PRIYA", psc: { marks: 50, att: 96 }, dms: { marks: 50, att: 85 }, dbms: { marks: 48, att: 86 }, os: { marks: 50, att: 90 }, wt: { marks: 50, att: 93 }, rmIpr: { marks: 43, att: 94 } },
  { rollNo: 10, usn: "22BI25MCA060-T", name: "ANJINEYA K G", psc: { marks: 26, att: 95 }, dms: { marks: 30, att: 85 }, dbms: { marks: 43, att: 95 }, os: { marks: 38, att: 90 }, wt: { marks: 42, att: 86 }, rmIpr: { marks: 29, att: 97 } },
  { rollNo: 11, usn: "22BI25MCA010-T", name: "ANURAG VERMA", psc: { marks: 48, att: 77 }, dms: { marks: 32, att: 75 }, dbms: { marks: 35, att: 79 }, os: { marks: 44, att: 83 }, wt: { marks: 46, att: 66 }, rmIpr: { marks: 46, att: 76 } },
  { rollNo: 12, usn: "22BI25MCA094-T", name: "ARUNA JYOTHI", psc: { marks: 50, att: 93 }, dms: { marks: 42, att: 85 }, dbms: { marks: 43, att: 95 }, os: { marks: 45, att: 90 }, wt: { marks: 49, att: 93 }, rmIpr: { marks: 48, att: 83 } },
  { rollNo: 13, usn: "22BI25MCA029-T", name: "ASMA ANJUM", psc: { marks: 50, att: 61 }, dms: { marks: 47, att: 50 }, dbms: { marks: 43, att: 65 }, os: { marks: 47, att: 67 }, wt: { marks: 50, att: 55 }, rmIpr: { marks: 39, att: 55 } },
  { rollNo: 14, usn: "22BI25MCA036-T", name: "AYESHA NUFA", psc: { marks: 50, att: 81 }, dms: { marks: 50, att: 80 }, dbms: { marks: 46, att: 77 }, os: { marks: 47, att: 70 }, wt: { marks: 46, att: 90 }, rmIpr: { marks: 50, att: 84 } },
  { rollNo: 15, usn: "22BI25MCA040-T", name: "AYESHA SULTANA M", psc: { marks: 41, att: 89 }, dms: { marks: 47, att: 80 }, dbms: { marks: 38, att: 81 }, os: { marks: 44, att: 93 }, wt: { marks: 35, att: 93 }, rmIpr: { marks: 40, att: 94 } },
  { rollNo: 16, usn: "22BI25MCA078-T", name: "B MOUNESH", psc: { marks: 50, att: 96 }, dms: { marks: 48, att: 95 }, dbms: { marks: 47, att: 81 }, os: { marks: 46, att: 93 }, wt: { marks: 50, att: 90 }, rmIpr: { marks: 46, att: 90 } },
  { rollNo: 17, usn: "22BI25MCA046-T", name: "B SAITEJA", psc: { marks: 18, att: 48 }, dms: { marks: 4, att: 30 }, dbms: { marks: 25, att: 49 }, os: { marks: 26, att: 53 }, wt: { marks: 19, att: 66 }, rmIpr: { marks: 45, att: 45 } },
  { rollNo: 18, usn: "22BI25MCA101-T", name: "B J RANGANATH", psc: { marks: 17, att: 78 }, dms: { marks: 45, att: 70 }, dbms: { marks: 34, att: 86 }, os: { marks: 42, att: 77 }, wt: { marks: 42, att: 59 }, rmIpr: { marks: 46, att: 66 } },
  { rollNo: 19, usn: "22BI25MCA042-T", name: "BHAGAVAN REDDY P", psc: { marks: 50, att: 96 }, dms: { marks: 32, att: 90 }, dbms: { marks: 45, att: 100 }, os: { marks: 39, att: 93 }, wt: { marks: 42, att: 100 }, rmIpr: { marks: 46, att: 100 } },
  { rollNo: 20, usn: "22BI25MCA093-T", name: "BHAGYASHRI", psc: { marks: 50, att: 94 }, dms: { marks: 48, att: 90 }, dbms: { marks: 45, att: 95 }, os: { marks: 46, att: 87 }, wt: { marks: 47, att: 90 }, rmIpr: { marks: 47, att: 94 } },
  { rollNo: 21, usn: "22BI25MCA100-T", name: "BHUDHANUR BHUMIKA", psc: { marks: 40, att: 93 }, dms: { marks: 40, att: 95 }, dbms: { marks: 46, att: 81 }, os: { marks: 46, att: 87 }, wt: { marks: 44, att: 72 }, rmIpr: { marks: 48, att: 73 } },
  { rollNo: 22, usn: "22BI25MCA022-T", name: "BOLLINENI ASWINI", psc: { marks: 50, att: 61 }, dms: { marks: 26, att: 60 }, dbms: { marks: 39, att: 72 }, os: { marks: 32, att: 80 }, wt: { marks: 32, att: 55 }, rmIpr: { marks: 39, att: 62 } },
  { rollNo: 23, usn: "22BI25MCA011-T", name: "BUDDAREDDY GARI RISHITHA REDDY", psc: { marks: 40, att: 88 }, dms: { marks: 50, att: 95 }, dbms: { marks: 44, att: 81 }, os: { marks: 37, att: 93 }, wt: { marks: 45, att: 79 }, rmIpr: { marks: 50, att: 80 } },
  { rollNo: 24, usn: "22BI25MCA018-T", name: "BUDURU RANJITHA", psc: { marks: 50, att: 100 }, dms: { marks: 45, att: 100 }, dbms: { marks: 50, att: 93 }, os: { marks: 49, att: 100 }, wt: { marks: 49, att: 86 }, rmIpr: { marks: 50, att: 100 } },
  { rollNo: 25, usn: "22BI25MCA105-T", name: "D AKHILA REDDY", psc: { marks: 50, att: 100 }, dms: { marks: 47, att: 95 }, dbms: { marks: 44, att: 95 }, os: { marks: 49, att: 100 }, wt: { marks: 45, att: 90 }, rmIpr: { marks: 42, att: 93 } },
  { rollNo: 26, usn: "22BI25MCA102-T", name: "D M ABHISHEK", psc: { marks: 50, att: 96 }, dms: { marks: 33, att: 90 }, dbms: { marks: 49, att: 100 }, os: { marks: 47, att: 80 }, wt: { marks: 48, att: 86 }, rmIpr: { marks: 49, att: 82 } },
  { rollNo: 27, usn: "22BI25MCA059-T", name: "FARIYA FATHIMA", psc: { marks: 24, att: 79 }, dms: { marks: 11, att: 55 }, dbms: { marks: 25, att: 81 }, os: { marks: 32, att: 78 }, wt: { marks: 25, att: 72 }, rmIpr: { marks: 42, att: 70 } },
  { rollNo: 28, usn: "22BI25MCA008-T", name: "FIRDOSE JAHAN K", psc: { marks: 50, att: 81 }, dms: { marks: 47, att: 65 }, dbms: { marks: 40, att: 84 }, os: { marks: 43, att: 80 }, wt: { marks: 48, att: 79 }, rmIpr: { marks: 43, att: 78 } },
  { rollNo: 29, usn: "22BI25MCA057-T", name: "G GANESH", psc: { marks: 34, att: 84 }, dms: { marks: 32, att: 20 }, dbms: { marks: 41, att: 93 }, os: { marks: 47, att: 90 }, wt: { marks: 39, att: 3 }, rmIpr: { marks: 44, att: 25 } },
  { rollNo: 30, usn: "22BI25MCA064-T", name: "G N SRINIVASA", psc: { marks: 45, att: 94 }, dms: { marks: 31, att: 85 }, dbms: { marks: 46, att: 93 }, os: { marks: 38, att: 83 }, wt: { marks: 48, att: 90 }, rmIpr: { marks: 44, att: 87 } },
  { rollNo: 31, usn: "22BI25MCA074-T", name: "GADILINGAPPA B R", psc: { marks: 50, att: 100 }, dms: { marks: 48, att: 100 }, dbms: { marks: 46, att: 100 }, os: { marks: 49, att: 97 }, wt: { marks: 41, att: 86 }, rmIpr: { marks: 37, att: 85 } },
  { rollNo: 32, usn: "22BI25MCA019-T", name: "GANESH B", psc: { marks: 40, att: 88 }, dms: { marks: 14, att: 100 }, dbms: { marks: 25, att: 88 }, os: { marks: 28, att: 83 }, wt: { marks: 31, att: 86 }, rmIpr: { marks: 44, att: 84 } },
  { rollNo: 33, usn: "22BI25MCA048-T", name: "GOUSIYA S", psc: { marks: 50, att: 80 }, dms: { marks: 40, att: 50 }, dbms: { marks: 43, att: 84 }, os: { marks: 48, att: 80 }, wt: { marks: 36, att: 72 }, rmIpr: { marks: 34, att: 80 } },
  { rollNo: 34, usn: "22BI25MCA097-T", name: "GOWTHAMI A", psc: { marks: 50, att: 100 }, dms: { marks: 30, att: 90 }, dbms: { marks: 38, att: 88 }, os: { marks: 49, att: 100 }, wt: { marks: 44, att: 93 }, rmIpr: { marks: 38, att: 97 } },
  { rollNo: 35, usn: "22BI25MCA038-T", name: "GURUPADI H", psc: { marks: 29, att: 100 }, dms: { marks: 31, att: 95 }, dbms: { marks: 37, att: 91 }, os: { marks: 34, att: 93 }, wt: { marks: 34, att: 90 }, rmIpr: { marks: 24, att: 87 } },
  { rollNo: 36, usn: "22BI25MCA084-T", name: "H S ABHISHEK", psc: { marks: 47, att: 81 }, dms: { marks: 29, att: 85 }, dbms: { marks: 46, att: 100 }, os: { marks: 46, att: 93 }, wt: { marks: 33, att: 97 }, rmIpr: { marks: 37, att: 93 } },
  { rollNo: 37, usn: "22BI25MCA021-T", name: "J PRAVALIKA", psc: { marks: 46, att: 89 }, dms: { marks: 34, att: 50 }, dbms: { marks: 48, att: 81 }, os: { marks: 44, att: 80 }, wt: { marks: 46, att: 90 }, rmIpr: { marks: 42, att: 94 } },
  { rollNo: 38, usn: "22BI25MCA037-T", name: "JAYA KRISHNA REDDY M", psc: { marks: 38, att: 85 }, dms: { marks: 28, att: 70 }, dbms: { marks: 45, att: 84 }, os: { marks: 40, att: 80 }, wt: { marks: 37, att: 90 }, rmIpr: { marks: 45, att: 80 } },
  { rollNo: 39, usn: "22BI25MCA043-T", name: "K GURURAJ", psc: { marks: 36, att: 76 }, dms: { marks: 29, att: 80 }, dbms: { marks: 45, att: 88 }, os: { marks: 39, att: 87 }, wt: { marks: 34, att: 79 }, rmIpr: { marks: 41, att: 78 } },
  { rollNo: 40, usn: "22BI25MCA054-T", name: "K MANASA DEVI", psc: { marks: 50, att: 89 }, dms: { marks: 30, att: 80 }, dbms: { marks: 37, att: 79 }, os: { marks: 48, att: 83 }, wt: { marks: 43, att: 86 }, rmIpr: { marks: 40, att: 84 } },
  { rollNo: 41, usn: "22BI25MCA047-T", name: "K MOHAMMED KHIZAR", psc: { marks: 46, att: 100 }, dms: { marks: 41, att: 100 }, dbms: { marks: 40, att: 91 }, os: { marks: 40, att: 90 }, wt: { marks: 37, att: 86 }, rmIpr: { marks: 33, att: 87 } },
  { rollNo: 42, usn: "22BI25MCA067-T", name: "KAVYA B", psc: { marks: 50, att: 94 }, dms: { marks: 42, att: 90 }, dbms: { marks: 44, att: 93 }, os: { marks: 43, att: 87 }, wt: { marks: 43, att: 93 }, rmIpr: { marks: 39, att: 93 } },
  { rollNo: 43, usn: "22BI25MCA083-T", name: "KEERTHI K", psc: { marks: 50, att: 93 }, dms: { marks: 44, att: 85 }, dbms: { marks: 48, att: 91 }, os: { marks: 47, att: 83 }, wt: { marks: 48, att: 90 }, rmIpr: { marks: 50, att: 88 } },
  { rollNo: 44, usn: "22BI25MCA104-T", name: "LAKSHMI B", psc: { marks: 36, att: 88 }, dms: { marks: 40, att: 60 }, dbms: { marks: 35, att: 93 }, os: { marks: 34, att: 87 }, wt: { marks: 40, att: 83 }, rmIpr: { marks: 41, att: 80 } },
  { rollNo: 45, usn: "22BI25MCA077-T", name: "LAKSHMI SHREYA M", psc: { marks: 50, att: 96 }, dms: { marks: 50, att: 90 }, dbms: { marks: 41, att: 84 }, os: { marks: 48, att: 90 }, wt: { marks: 48, att: 86 }, rmIpr: { marks: 44, att: 92 } },
  { rollNo: 46, usn: "22BI25MCA026-T", name: "M AMMULU", psc: { marks: 48, att: 94 }, dms: { marks: 31, att: 80 }, dbms: { marks: 45, att: 95 }, os: { marks: 47, att: 90 }, wt: { marks: 44, att: 93 }, rmIpr: { marks: 39, att: 93 } },
  { rollNo: 47, usn: "22BI25MCA090-T", name: "M HAZARA", psc: { marks: 50, att: 91 }, dms: { marks: 47, att: 80 }, dbms: { marks: 44, att: 91 }, os: { marks: 49, att: 87 }, wt: { marks: 49, att: 90 }, rmIpr: { marks: 38, att: 82 } },
  { rollNo: 48, usn: "22BI25MCA082-T", name: "M NEELA", psc: { marks: 50, att: 86 }, dms: { marks: 50, att: 85 }, dbms: { marks: 49, att: 86 }, os: { marks: 46, att: 80 }, wt: { marks: 48, att: 76 }, rmIpr: { marks: 48, att: 86 } },
  { rollNo: 49, usn: "22BI25MCA027-T", name: "M VENKATESH", psc: { marks: 48, att: 60 }, dms: { marks: 29, att: 60 }, dbms: { marks: 37, att: 77 }, os: { marks: 35, att: 63 }, wt: { marks: 44, att: 62 }, rmIpr: { marks: 24, att: 55 } },
  { rollNo: 50, usn: "22BI25MCA035-T", name: "SAMIYA KHAN", psc: { marks: 48, att: 98 }, dms: { marks: 49, att: 90 }, dbms: { marks: 49, att: 86 }, os: { marks: 49, att: 93 }, wt: { marks: 50, att: 93 }, rmIpr: { marks: 49, att: 94 } },
  { rollNo: 51, usn: "22BI25MCA056-T", name: "SAMRIN TAJ S", psc: { marks: 50, att: 98 }, dms: { marks: 47, att: 85 }, dbms: { marks: 48, att: 84 }, os: { marks: 49, att: 87 }, wt: { marks: 50, att: 93 }, rmIpr: { marks: 44, att: 95 } },
];

// Section B Data (3rd Semester) - RM & IPR ATT is missing
const sectionBStudents = [
  { rollNo: 52, usn: "22BI25MCA091-T", name: "M A TARASREE", psc: { marks: 49, att: 91 }, dms: { marks: 45, att: 96 }, dbms: { marks: 46, att: 98 }, os: { marks: 45, att: 91 }, wt: { marks: 47, att: 88 }, rmIpr: { marks: 44, att: undefined } },
  { rollNo: 53, usn: "22BI25MCA063-T", name: "M JOSHNA REDDY", psc: { marks: 49, att: 95 }, dms: { marks: 50, att: 96 }, dbms: { marks: 46, att: 95 }, os: { marks: 43, att: 96 }, wt: { marks: 48, att: 97 }, rmIpr: { marks: 41, att: undefined } },
  { rollNo: 54, usn: "22BI25MCA070-T", name: "MANOJ KUMAR", psc: { marks: 40, att: 95 }, dms: { marks: 43, att: 88 }, dbms: { marks: 46, att: 93 }, os: { marks: 46, att: 87 }, wt: { marks: 48, att: 97 }, rmIpr: { marks: 40, att: undefined } },
  { rollNo: 55, usn: "22BI25MCA085-T", name: "MASEERA FATHIMA M", psc: { marks: 48, att: 95 }, dms: { marks: 45, att: 100 }, dbms: { marks: 45, att: 98 }, os: { marks: 49, att: 100 }, wt: { marks: 49, att: 94 }, rmIpr: { marks: 35, att: undefined } },
  { rollNo: 56, usn: "22BI25MCA017-T", name: "MOHAMMED IMRAN", psc: { marks: 39, att: 86 }, dms: { marks: 45, att: 88 }, dbms: { marks: 44, att: 88 }, os: { marks: 42, att: 83 }, wt: { marks: 44, att: 82 }, rmIpr: { marks: 39, att: undefined } },
  { rollNo: 57, usn: "22BI25MCA087-T", name: "MOHAMMED SAMEER", psc: { marks: 37, att: 77 }, dms: { marks: 30, att: 84 }, dbms: { marks: 37, att: 95 }, os: { marks: 43, att: 96 }, wt: { marks: 44, att: 85 }, rmIpr: { marks: 34, att: undefined } },
  { rollNo: 58, usn: "22BI25MCA103-T", name: "MOHAMMED DANISH", psc: { marks: 32, att: 77 }, dms: { marks: 43, att: 76 }, dbms: { marks: 31, att: 90 }, os: { marks: 30, att: 96 }, wt: { marks: 25, att: 91 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 59, usn: "22BI25MCA014-T", name: "MOHAMMED N ROSHAN ZAMEER", psc: { marks: 40, att: 82 }, dms: { marks: 35, att: 84 }, dbms: { marks: 45, att: 85 }, os: { marks: 43, att: 87 }, wt: { marks: 44, att: 91 }, rmIpr: { marks: 47, att: undefined } },
  { rollNo: 60, usn: "22BI25MCA001-T", name: "MULLANGI JAYACHANDRA", psc: { marks: 41, att: 82 }, dms: { marks: 33, att: 88 }, dbms: { marks: 43, att: 88 }, os: { marks: 39, att: 80 }, wt: { marks: 42, att: 76 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 61, usn: "22BI25MCA072-T", name: "NANDINI V H", psc: { marks: 44, att: 82 }, dms: { marks: 46, att: 96 }, dbms: { marks: 42, att: 80 }, os: { marks: 47, att: 96 }, wt: { marks: 47, att: 91 }, rmIpr: { marks: 47, att: undefined } },
  { rollNo: 62, usn: "22BI25MCA024-T", name: "NEESHATH FATHIMA", psc: { marks: 36, att: 95 }, dms: { marks: 48, att: 96 }, dbms: { marks: 45, att: 90 }, os: { marks: 49, att: 87 }, wt: { marks: 40, att: 85 }, rmIpr: { marks: 41, att: undefined } },
  { rollNo: 63, usn: "22BI25MCA062-T", name: "NIKIL KUMAR K", psc: { marks: 33, att: 73 }, dms: { marks: 48, att: 76 }, dbms: { marks: 42, att: 85 }, os: { marks: 42, att: 80 }, wt: { marks: 47, att: 67 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 64, usn: "22BI25MCA055-T", name: "NIKITHA B", psc: { marks: 45, att: 82 }, dms: { marks: 47, att: 88 }, dbms: { marks: 47, att: 78 }, os: { marks: 48, att: 87 }, wt: { marks: 43, att: 79 }, rmIpr: { marks: 41, att: undefined } },
  { rollNo: 65, usn: "22BI25MCA098-T", name: "P UMMAR FAROOQ", psc: { marks: 27, att: 5 }, dms: { marks: 29, att: 0 }, dbms: { marks: 29, att: 78 }, os: { marks: 27, att: 80 }, wt: { marks: 35, att: 88 }, rmIpr: { marks: 45, att: undefined } },
  { rollNo: 66, usn: "22BI25MCA073-T", name: "PAVAN KUMAR U", psc: { marks: 43, att: 32 }, dms: { marks: 47, att: 72 }, dbms: { marks: 40, att: 90 }, os: { marks: 38, att: 90 }, wt: { marks: 41, att: 88 }, rmIpr: { marks: 39, att: undefined } },
  { rollNo: 67, usn: "22BI25MCA069-T", name: "PAVANKUMAR RAJASHEKHAR HIREMATH", psc: { marks: 26, att: 68 }, dms: { marks: 50, att: 72 }, dbms: { marks: 16, att: 93 }, os: { marks: 40, att: 84 }, wt: { marks: 35, att: 70 }, rmIpr: { marks: 48, att: undefined } },
  { rollNo: 68, usn: "22BI25MCA053-T", name: "PAVITRA R GANJIMATH", psc: { marks: 49, att: 95 }, dms: { marks: 50, att: 92 }, dbms: { marks: 49, att: 90 }, os: { marks: 50, att: 91 }, wt: { marks: 50, att: 94 }, rmIpr: { marks: 48, att: undefined } },
  { rollNo: 69, usn: "22BI25MCA020-T", name: "PRAMOD KUMAR D P", psc: { marks: 32, att: 50 }, dms: { marks: 47, att: 68 }, dbms: { marks: 32, att: 63 }, os: { marks: 36, att: 70 }, wt: { marks: 31, att: 64 }, rmIpr: { marks: 39, att: undefined } },
  { rollNo: 70, usn: "22BI25MCA044-T", name: "R HEMALATHA", psc: { marks: 50, att: 95 }, dms: { marks: 50, att: 96 }, dbms: { marks: 46, att: 88 }, os: { marks: 49, att: 83 }, wt: { marks: 47, att: 85 }, rmIpr: { marks: 46, att: undefined } },
  { rollNo: 71, usn: "22BI25MCA009-T", name: "R SREEKARI", psc: { marks: 50, att: 95 }, dms: { marks: 45, att: 100 }, dbms: { marks: 43, att: 98 }, os: { marks: 46, att: 100 }, wt: { marks: 46, att: 94 }, rmIpr: { marks: 48, att: undefined } },
  { rollNo: 72, usn: "22BI25MCA050-T", name: "R K SHAILAJA", psc: { marks: 48, att: 91 }, dms: { marks: 50, att: 96 }, dbms: { marks: null, att: 88 }, os: { marks: null, att: 83 }, wt: { marks: 46, att: 91 }, rmIpr: { marks: 39, att: undefined } },
  { rollNo: 73, usn: "22BI25MCA015-T", name: "R YUGDEEP", psc: { marks: 31, att: 73 }, dms: { marks: 28, att: 76 }, dbms: { marks: 35, att: 83 }, os: { marks: 37, att: 83 }, wt: { marks: 41, att: 73 }, rmIpr: { marks: 47, att: undefined } },
  { rollNo: 75, usn: "22BI25MCA004-T", name: "RAMESH K", psc: { marks: 33, att: 95 }, dms: { marks: 48, att: 96 }, dbms: { marks: 31, att: 88 }, os: { marks: 31, att: 83 }, wt: { marks: 36, att: 85 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 76, usn: "22BI25MCA052-T", name: "RENUKA H S", psc: { marks: 50, att: 86 }, dms: { marks: 40, att: 88 }, dbms: { marks: 45, att: 88 }, os: { marks: 47, att: 91 }, wt: { marks: 47, att: 94 }, rmIpr: { marks: 45, att: undefined } },
  { rollNo: 77, usn: "22BI25MCA099-T", name: "S K PRAMEYA", psc: { marks: 47, att: 91 }, dms: { marks: 50, att: 88 }, dbms: { marks: 46, att: 93 }, os: { marks: 49, att: 91 }, wt: { marks: 47, att: 79 }, rmIpr: { marks: 45, att: undefined } },
  { rollNo: 78, usn: "22BI25MCA025-T", name: "SAI GANESH REDDY K", psc: { marks: 46, att: 77 }, dms: { marks: 45, att: 88 }, dbms: { marks: 37, att: 90 }, os: { marks: 17, att: 91 }, wt: { marks: 28, att: 82 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 79, usn: "22BI25MCA086-T", name: "SANA AISHA A K", psc: { marks: 45, att: 95 }, dms: { marks: 35, att: 100 }, dbms: { marks: 44, att: 98 }, os: { marks: 44, att: 96 }, wt: { marks: 42, att: 94 }, rmIpr: { marks: 37, att: undefined } },
  { rollNo: 80, usn: "22BI25MCA045-T", name: "SANDEEP KULKARNI", psc: { marks: 37, att: 73 }, dms: { marks: 50, att: 76 }, dbms: { marks: 39, att: 75 }, os: { marks: 42, att: 87 }, wt: { marks: 35, att: 82 }, rmIpr: { marks: 35, att: undefined } },
  { rollNo: 81, usn: "22BI25MCA030-T", name: "SANDHYA", psc: { marks: 50, att: 77 }, dms: { marks: 46, att: 88 }, dbms: { marks: 45, att: 90 }, os: { marks: 45, att: 100 }, wt: { marks: 48, att: 91 }, rmIpr: { marks: 44, att: undefined } },
  { rollNo: 82, usn: "22BI25MCA089-T", name: "SHAIK JEELAN K", psc: { marks: 29, att: 86 }, dms: { marks: 18, att: 84 }, dbms: { marks: 21, att: 93 }, os: { marks: 21, att: 80 }, wt: { marks: 39, att: 85 }, rmIpr: { marks: 26, att: undefined } },
  { rollNo: 83, usn: "22BI25MCA096-T", name: "SHARANU", psc: { marks: 33, att: 82 }, dms: { marks: 37, att: 76 }, dbms: { marks: 35, att: 93 }, os: { marks: 38, att: 91 }, wt: { marks: 39, att: 91 }, rmIpr: { marks: 42, att: undefined } },
  { rollNo: 84, usn: "22BI25MCA092-T", name: "SHASHI KUMAR M", psc: { marks: 33, att: 73 }, dms: { marks: 44, att: 84 }, dbms: { marks: 25, att: 90 }, os: { marks: 23, att: 87 }, wt: { marks: 11, att: 79 }, rmIpr: { marks: 48, att: undefined } },
  { rollNo: 85, usn: "22BI25MCA066-T", name: "SHIVABASAV ASHOK JULAKATTI", psc: { marks: 50, att: 59 }, dms: { marks: 30, att: 68 }, dbms: { marks: 33, att: 73 }, os: { marks: 32, att: 76 }, wt: { marks: 42, att: 67 }, rmIpr: { marks: 47, att: undefined } },
  { rollNo: 86, usn: "22BI25MCA028-T", name: "SHRIJEET F GHOTNEKAR", psc: { marks: 48, att: 91 }, dms: { marks: 49, att: 84 }, dbms: { marks: 37, att: 88 }, os: { marks: 43, att: 80 }, wt: { marks: 44, att: 94 }, rmIpr: { marks: 48, att: undefined } },
  { rollNo: 87, usn: "22BI25MCA033-T", name: "SNEHA", psc: { marks: 44, att: 82 }, dms: { marks: 50, att: 88 }, dbms: { marks: 47, att: 85 }, os: { marks: 49, att: 91 }, wt: { marks: 37, att: 76 }, rmIpr: { marks: 47, att: undefined } },
  { rollNo: 88, usn: "22BI25MCA076-T", name: "SNEHA", psc: { marks: 50, att: 82 }, dms: { marks: 50, att: 88 }, dbms: { marks: 45, att: 90 }, os: { marks: 49, att: 96 }, wt: { marks: 47, att: 85 }, rmIpr: { marks: 46, att: undefined } },
  { rollNo: 89, usn: "22BI25MCA061-T", name: "SUSHMA J", psc: { marks: 49, att: 86 }, dms: { marks: 50, att: 100 }, dbms: { marks: 46, att: 95 }, os: { marks: 49, att: 96 }, wt: { marks: 47, att: 85 }, rmIpr: { marks: 50, att: undefined } },
  { rollNo: 90, usn: "22BI25MCA068-T", name: "SUSHMA KUMARI M", psc: { marks: 50, att: 77 }, dms: { marks: 48, att: 80 }, dbms: { marks: 44, att: 90 }, os: { marks: 49, att: 90 }, wt: { marks: 43, att: 79 }, rmIpr: { marks: 42, att: undefined } },
  { rollNo: 91, usn: "22BI25MCA023-T", name: "SWATHI B", psc: { marks: 45, att: 64 }, dms: { marks: 50, att: 92 }, dbms: { marks: 37, att: 93 }, os: { marks: 48, att: 96 }, wt: { marks: 40, att: 85 }, rmIpr: { marks: 47, att: undefined } },
  { rollNo: 92, usn: "22BI25MCA088-T", name: "T RENUKA", psc: { marks: 49, att: 95 }, dms: { marks: 50, att: 96 }, dbms: { marks: 47, att: 95 }, os: { marks: 49, att: 96 }, wt: { marks: 44, att: 94 }, rmIpr: { marks: 46, att: undefined } },
  { rollNo: 93, usn: "22BI25MCA032-T", name: "T TULASI", psc: { marks: 50, att: 91 }, dms: { marks: 50, att: 96 }, dbms: { marks: 50, att: 95 }, os: { marks: 46, att: 91 }, wt: { marks: 48, att: 88 }, rmIpr: { marks: 50, att: undefined } },
  { rollNo: 94, usn: "22BI25MCA095-T", name: "TAPAL ARSHIYA", psc: { marks: 45, att: 73 }, dms: { marks: 37, att: 88 }, dbms: { marks: 33, att: 83 }, os: { marks: 35, att: 80 }, wt: { marks: 40, att: 58 }, rmIpr: { marks: 50, att: undefined } },
  { rollNo: 95, usn: "22BI25MCA079-T", name: "U M NAGESHA SHARMA", psc: { marks: 35, att: 77 }, dms: { marks: 43, att: 76 }, dbms: { marks: 36, att: 83 }, os: { marks: 33, att: 78 }, wt: { marks: 41, att: 85 }, rmIpr: { marks: 33, att: undefined } },
  { rollNo: 96, usn: "22BI25MCA041-T", name: "U M PAVAN KUMAR", psc: { marks: 38, att: 82 }, dms: { marks: 48, att: 88 }, dbms: { marks: 41, att: 95 }, os: { marks: 34, att: 100 }, wt: { marks: 34, att: 88 }, rmIpr: { marks: 41, att: undefined } },
  { rollNo: 97, usn: "22BI25MCA058-T", name: "USHARANI H K", psc: { marks: 26, att: 32 }, dms: { marks: 16, att: 8 }, dbms: { marks: 26, att: 38 }, os: { marks: 36, att: 80 }, wt: { marks: 27, att: 33 }, rmIpr: { marks: 35, att: undefined } },
  { rollNo: 98, usn: "22BI25MCA034-T", name: "V MANASA", psc: { marks: 50, att: 100 }, dms: { marks: 50, att: 96 }, dbms: { marks: 46, att: 95 }, os: { marks: 46, att: 100 }, wt: { marks: 46, att: 88 }, rmIpr: { marks: 44, att: undefined } },
  { rollNo: 99, usn: "22BI25MCA051-T", name: "VARSHA H S", psc: { marks: 39, att: 82 }, dms: { marks: 47, att: 88 }, dbms: { marks: 40, att: 93 }, os: { marks: 45, att: 87 }, wt: { marks: 45, att: 94 }, rmIpr: { marks: 48, att: undefined } },
  { rollNo: 100, usn: "22BI25MCA080-T", name: "VARUNAKUMARA H G", psc: { marks: 48, att: 91 }, dms: { marks: 45, att: 84 }, dbms: { marks: 40, att: 93 }, os: { marks: 41, att: 80 }, wt: { marks: 46, att: 79 }, rmIpr: { marks: 38, att: undefined } },
  { rollNo: 101, usn: "22BI25MCA039-T", name: "VINAYAKA N", psc: { marks: 45, att: 91 }, dms: { marks: 44, att: 92 }, dbms: { marks: 42, att: 95 }, os: { marks: 45, att: 96 }, wt: { marks: 45, att: 91 }, rmIpr: { marks: 38, att: undefined } },
  { rollNo: 102, usn: "22BI25MCA006-T", name: "VINIT V M", psc: { marks: 47, att: 95 }, dms: { marks: 46, att: 92 }, dbms: { marks: 38, att: 93 }, os: { marks: 45, att: 96 }, wt: { marks: 45, att: 88 }, rmIpr: { marks: 46, att: undefined } },
  { rollNo: 103, usn: "22BI25MCA005-T", name: "YASAR ARAFATH", psc: { marks: 15, att: 0 }, dms: { marks: 31, att: 4 }, dbms: { marks: 25, att: 100 }, os: { marks: 31, att: 90 }, wt: { marks: 38, att: 88 }, rmIpr: { marks: 20, att: undefined } },
  { rollNo: 104, usn: "22BI25MCA106-T", name: "MADHANKUMAR N B", psc: { marks: 33, att: 95 }, dms: { marks: 36, att: 72 }, dbms: { marks: 40, att: 100 }, os: { marks: 37, att: 92 }, wt: { marks: 43, att: 64 }, rmIpr: { marks: 45, att: undefined } },
  { rollNo: 105, usn: "22BI25MCA107-T", name: "SAMUEL U", psc: { marks: 33, att: 82 }, dms: { marks: 19, att: 76 }, dbms: { marks: 30, att: 64 }, os: { marks: 30, att: 70 }, wt: { marks: 31, att: 48 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 106, usn: "22BI25MCA108-T", name: "USHA", psc: { marks: null, att: 45 }, dms: { marks: null, att: 68 }, dbms: { marks: null, att: 93 }, os: { marks: null, att: 90 }, wt: { marks: null, att: 0 }, rmIpr: { marks: null, att: undefined } },
  { rollNo: 107, usn: "22BI25MCA109-T", name: "Y RASAMMA", psc: { marks: null, att: 64 }, dms: { marks: null, att: 68 }, dbms: { marks: null, att: 93 }, os: { marks: null, att: 90 }, wt: { marks: null, att: 0 }, rmIpr: { marks: null, att: undefined } },
  { rollNo: 108, usn: "22BI25MCA110-T", name: "PUTTI TARUN CHAND", psc: { marks: 39, att: 82 }, dms: { marks: 24, att: 80 }, dbms: { marks: 37, att: 80 }, os: { marks: 34, att: 82 }, wt: { marks: 27, att: 55 }, rmIpr: { marks: 43, att: undefined } },
  { rollNo: 109, usn: "22BI25MCA111-T", name: "YASHASWINI I M", psc: { marks: 38, att: 0 }, dms: { marks: 33, att: 72 }, dbms: { marks: 30, att: 93 }, os: { marks: 32, att: 92 }, wt: { marks: 40, att: 90 }, rmIpr: { marks: 44, att: undefined } },
];

type StudentType = typeof sectionAStudents[0] | typeof sectionBStudents[0];

const getAttendanceStatus = (att: number | undefined) => {
  if (att === undefined) return { label: "N/A", color: "bg-muted" };
  if (att >= 85) return { label: "Excellent", color: "bg-green-500" };
  if (att >= 75) return { label: "Good", color: "bg-blue-500" };
  if (att >= 50) return { label: "Average", color: "bg-yellow-500" };
  return { label: "Low", color: "bg-red-500" };
};

const getMarksStatus = (marks: number | null | undefined) => {
  if (marks === null || marks === undefined) return { label: "AB", color: "bg-muted text-muted-foreground" };
  if (marks >= 40) return { label: "Pass", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" };
  if (marks >= 20) return { label: "Needs Improvement", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" };
  return { label: "Fail", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" };
};

// Proctor mapping based on USN - synced exactly with Proctoring.tsx
const getProctorForStudent = (usn: string): string => {
  // Section A Proctors (from Proctoring.tsx)
  // Prakash Sarangamath: Roll 1-16
  const prakashStudents = [
    "22BI25MCA081-T", "22BI25MCA007-T", "22BI25MCA016-T", "22BI25MCA075-T", 
    "22BI25MCA065-T", "22BI25MCA013-T", "22BI25MCA071-T", "22BI25MCA049-T", 
    "22BI25MCA060-T", "22BI25MCA094-T", "22BI25MCA029-T", "22BI25MCA036-T", 
    "22BI25MCA040-T", "22BI25MCA078-T", "22BI25MCA046-T", "22BI25MCA101-T"
  ];
  
  // Subhashree S: Roll 17-47
  const subhashreeStudents = [
    "22BI25MCA042-T", "22BI25MCA093-T", "22BI25MCA100-T", "22BI25MCA011-T", 
    "22BI25MCA018-T", "22BI25MCA105-T", "22BI25MCA102-T", "22BI25MCA059-T", 
    "22BI25MCA008-T", "22BI25MCA064-T", "22BI25MCA074-T", "22BI25MCA019-T", 
    "22BI25MCA048-T", "22BI25MCA097-T", "22BI25MCA038-T", "22BI25MCA084-T", 
    "22BI25MCA021-T", "22BI25MCA037-T", "22BI25MCA043-T", "22BI25MCA054-T", 
    "22BI25MCA047-T", "22BI25MCA067-T", "22BI25MCA083-T", "22BI25MCA104-T", 
    "22BI25MCA077-T", "22BI25MCA026-T", "22BI25MCA090-T", "22BI25MCA082-T", 
    "22BI25MCA027-T", "22BI25MCA035-T", "22BI25MCA056-T"
  ];
  
  // Section B Proctors (from Proctoring.tsx)
  // Jennifer Mary S: Roll 48-63
  const jenniferStudents = [
    "22BI25MCA091-T", "22BI25MCA063-T", "22BI25MCA070-T", "22BI25MCA085-T", 
    "22BI25MCA017-T", "22BI25MCA087-T", "22BI25MCA103-T", "22BI25MCA014-T", 
    "22BI25MCA001-T", "22BI25MCA072-T", "22BI25MCA024-T", "22BI25MCA062-T", 
    "22BI25MCA055-T", "22BI25MCA069-T", "22BI25MCA053-T", "22BI25MCA044-T"
  ];
  
  // Sharvani: Roll 64-79
  const sharvaniStudents = [
    "22BI25MCA009-T", "22BI25MCA050-T", "22BI25MCA004-T", "22BI25MCA052-T", 
    "22BI25MCA099-T", "22BI25MCA025-T", "22BI25MCA086-T", "22BI25MCA045-T", 
    "22BI25MCA030-T", "22BI25MCA089-T", "22BI25MCA096-T", "22BI25MCA092-T", 
    "22BI25MCA066-T", "22BI25MCA028-T", "22BI25MCA033-T", "22BI25MCA076-T"
  ];
  
  // Sreelakshmi Joshi: Roll 80-95
  const sreelakshmiStudents = [
    "22BI25MCA061-T", "22BI25MCA068-T", "22BI25MCA023-T", "22BI25MCA088-T", 
    "22BI25MCA032-T", "22BI25MCA095-T", "22BI25MCA079-T", "22BI25MCA041-T", 
    "22BI25MCA034-T", "22BI25MCA051-T", "22BI25MCA080-T", "22BI25MCA039-T", 
    "22BI25MCA006-T", "22BI25MCA106-T", "22BI25MCA107-T", "22BI25MCA110-T"
  ];
  
  // Hayath Ali: Low attendance / special cases
  const hayathStudents = [
    "22BI25MCA002-T", "22BI25MCA010-T", "22BI25MCA022-T", "22BI25MCA057-T", 
    "22BI25MCA098-T", "22BI25MCA073-T", "22BI25MCA020-T", "22BI25MCA015-T", 
    "22BI25MCA031-T", "22BI25MCA058-T", "22BI25MCA005-T", "22BI25MCA108-T", 
    "22BI25MCA109-T", "22BI25MCA111-T"
  ];

  // Check Section A proctors
  if (prakashStudents.includes(usn)) return "Prakash S";
  if (subhashreeStudents.includes(usn)) return "Subhashree S";
  
  // Check Section B proctors
  if (jenniferStudents.includes(usn)) return "Jennifer Mary S";
  if (sharvaniStudents.includes(usn)) return "Sharvani";
  if (sreelakshmiStudents.includes(usn)) return "Sreelakshmi J";
  if (hayathStudents.includes(usn)) return "Hayath Ali";
  
  return "-";
};

// Calculate statistics for charts with student names
const calculateAttendanceDistribution = (students: StudentType[], subject: string) => {
  const ranges: Record<string, { count: number; students: string[] }> = {
    "0-50%": { count: 0, students: [] },
    "51-75%": { count: 0, students: [] },
    "76-84%": { count: 0, students: [] },
    "85%+": { count: 0, students: [] },
  };
  
  students.forEach((s) => {
    const subjectData = s[subject as keyof typeof s] as { marks?: number | null; att?: number } | undefined;
    const att = subjectData?.att;
    if (att !== undefined) {
      if (att <= 50) {
        ranges["0-50%"].count++;
        ranges["0-50%"].students.push(s.name);
      } else if (att <= 75) {
        ranges["51-75%"].count++;
        ranges["51-75%"].students.push(s.name);
      } else if (att <= 84) {
        ranges["76-84%"].count++;
        ranges["76-84%"].students.push(s.name);
      } else {
        ranges["85%+"].count++;
        ranges["85%+"].students.push(s.name);
      }
    }
  });
  
  return Object.entries(ranges).map(([name, data]) => ({ name, value: data.count, students: data.students }));
};

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#22c55e"];

const chartConfig = {
  psc: { label: "PSC", color: "hsl(var(--primary))" },
  dms: { label: "DMS", color: "hsl(var(--accent))" },
  dbms: { label: "DBMS", color: "hsl(var(--secondary))" },
  os: { label: "OS", color: "hsl(var(--muted))" },
  wt: { label: "WT", color: "hsl(var(--primary))" },
  rmIpr: { label: "RM & IPR", color: "hsl(var(--accent))" },
};

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("sectionA");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedPieSubject, setSelectedPieSubject] = useState("psc");

  const currentStudents = selectedSection === "sectionA" ? sectionAStudents : sectionBStudents;
  const subjects = ["psc", "dms", "dbms", "os", "wt", "rmIpr"];
  
  const filteredStudents = currentStudents.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === "all") return matchesSearch;
    
    const attendances = subjects
      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    
    const marks = subjects
      .map((sub) => (student[sub as keyof typeof student] as { marks?: number | null })?.marks)
      .filter((m) => m !== undefined && m !== null) as number[];
    
    const avgAtt = attendances.length > 0 
      ? attendances.reduce((a, b) => a + b, 0) / attendances.length 
      : 0;
    
    // IA marks are out of 50, so calculate percentage
    const avgMarksPercent = marks.length > 0 
      ? (marks.reduce((a, b) => a + b, 0) / marks.length) * 2 
      : 0;
    
    // Good Attendance & Poor Performance: >=75% Attendance & < 50% of IA Marks
    if (filterStatus === "goodAtt_poorPerf") return matchesSearch && avgAtt >= 75 && avgMarksPercent < 50;
    // Poor Attendance & Good Performance: < 75% Attendance & >= 60% of IA Marks (Low/Poor attendance with Good marks)
    if (filterStatus === "poorAtt_goodPerf") return matchesSearch && avgAtt < 75 && avgMarksPercent >= 60;
    // Poor Attendance & Poor Performance: < 75% Attendance & < 50% of IA Marks (Low/Poor attendance with Low marks)
    if (filterStatus === "poorAtt_poorPerf") return matchesSearch && avgAtt < 75 && avgMarksPercent < 50;
    
    return matchesSearch;
  });

  // Summary stats
  const totalStudents = currentStudents.length;
  
  const avgAttendance = Math.round(
    currentStudents.reduce((sum, student) => {
      const atts = subjects
        .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
        .filter((a) => a !== undefined) as number[];
      return sum + (atts.length > 0 ? atts.reduce((a, b) => a + b, 0) / atts.length : 0);
    }, 0) / totalStudents
  );

  const lowAttendanceCount = currentStudents.filter((student) => {
    const atts = subjects
      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    const avg = atts.length > 0 ? atts.reduce((a, b) => a + b, 0) / atts.length : 0;
    return avg < 75;
  }).length;

  const excellentCount = currentStudents.filter((student) => {
    const atts = subjects
      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
      .filter((a) => a !== undefined) as number[];
    const avg = atts.length > 0 ? atts.reduce((a, b) => a + b, 0) / atts.length : 0;
    return avg >= 85;
  }).length;

  // Bar chart data for subject-wise average marks
  const subjectLabels: Record<string, string> = {
    psc: "PSC",
    dms: "DMS",
    dbms: "DBMS",
    os: "OS",
    wt: "WT",
    rmIpr: "RM & IPR",
  };
  
  const subjectAvgData = subjects.map((sub) => {
    const marks = currentStudents
      .map((s) => (s[sub as keyof typeof s] as { marks?: number | null })?.marks)
      .filter((m) => m !== undefined && m !== null) as number[];
    return {
      subject: subjectLabels[sub] || sub.toUpperCase(),
      marks: marks.length > 0 ? Math.round(marks.reduce((a, b) => a + b, 0) / marks.length) : 0,
    };
  });

  const pieData = calculateAttendanceDistribution(currentStudents, selectedPieSubject);

  // Available subjects for pie chart
  const pieSubjectOptions = [
    { value: "psc", label: "PSC" },
    { value: "dms", label: "DMS" },
    { value: "dbms", label: "DBMS" },
    { value: "os", label: "OS" },
    { value: "wt", label: "WT" },
    { value: "rmIpr", label: "RM & IPR" },
  ];

  return (
    <div className="min-h-screen hero-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <HeroBadge />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            IA Performance & Analytics
          </h1>
          <p className="text-white/80">
            1st Internal Marks & Attendance Report - Academic Year 2025-26
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{totalStudents}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/10">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Attendance</p>
                  <p className="text-2xl font-bold text-foreground">{avgAttendance}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Excellent (85%+)</p>
                  <p className="text-2xl font-bold text-foreground">{excellentCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-red-500/10">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Low Attendance</p>
                  <p className="text-2xl font-bold text-foreground">{lowAttendanceCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Subject-wise Average Marks (out of 50)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <BarChart data={subjectAvgData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="subject" className="text-xs" />
                  <YAxis domain={[0, 50]} className="text-xs" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="marks" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Attendance Distribution
                </CardTitle>
                <Select value={selectedPieSubject} onValueChange={setSelectedPieSubject}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {pieSubjectOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border rounded-lg p-3 shadow-lg max-w-[300px]">
                            <p className="font-semibold text-foreground mb-1">{data.name}: {data.value} students</p>
                            {data.students && data.students.length > 0 && (
                              <div className="text-xs text-muted-foreground max-h-[150px] overflow-y-auto">
                                {data.students.slice(0, 10).map((name: string, idx: number) => (
                                  <p key={idx} className="truncate">{name}</p>
                                ))}
                                {data.students.length > 10 && (
                                  <p className="text-primary mt-1">+{data.students.length - 10} more...</p>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Table */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <CardTitle>Student Records</CardTitle>
              <div className="flex flex-wrap gap-3">
                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sectionA">Section A</SelectItem>
                    <SelectItem value="sectionB">Section B</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[220px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Students</SelectItem>
                    <SelectItem value="goodAtt_poorPerf">Good Att &amp; Poor Perf</SelectItem>
                    <SelectItem value="poorAtt_goodPerf">Poor Att &amp; Good Perf</SelectItem>
                    <SelectItem value="poorAtt_poorPerf">Poor Att &amp; Poor Perf</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or USN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-[250px]"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="table" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="table">Table View</TabsTrigger>
                <TabsTrigger value="cards">Card View</TabsTrigger>
              </TabsList>

              <TabsContent value="table">
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[60px]">R.No</TableHead>
                        <TableHead>USN</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-center">PSC</TableHead>
                        <TableHead className="text-center">DMS</TableHead>
                        <TableHead className="text-center">DBMS</TableHead>
                        <TableHead className="text-center">OS</TableHead>
                        <TableHead className="text-center">WT</TableHead>
                        <TableHead className="text-center">RM & IPR</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Proctor</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((student) => {
                        const atts = subjects
                          .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
                          .filter((a) => a !== undefined) as number[];
                        const avgAtt = atts.length > 0 
                          ? atts.reduce((a, b) => a + b, 0) / atts.length 
                          : 0;
                        const status = getAttendanceStatus(avgAtt);
                        const proctor = getProctorForStudent(student.usn);
                        
                        return (
                          <TableRow key={student.usn}>
                            <TableCell className="font-medium">{student.rollNo}</TableCell>
                            <TableCell className="font-mono text-xs">{student.usn}</TableCell>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.psc?.marks).color}>
                                  {student.psc?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.psc?.att !== undefined ? `${student.psc.att}%` : "-"}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.dms?.marks).color}>
                                  {student.dms?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.dms?.att !== undefined ? `${student.dms.att}%` : "-"}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.dbms?.marks).color}>
                                  {student.dbms?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.dbms?.att !== undefined ? `${student.dbms.att}%` : "-"}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.os?.marks).color}>
                                  {student.os?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.os?.att !== undefined ? `${student.os.att}%` : "-"}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.wt?.marks).color}>
                                  {student.wt?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.wt?.att !== undefined ? `${student.wt.att}%` : "-"}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="space-y-1">
                                <Badge variant="outline" className={getMarksStatus(student.rmIpr?.marks).color}>
                                  {student.rmIpr?.marks ?? "AB"}
                                </Badge>
                                <p className="text-xs text-muted-foreground">{student.rmIpr?.att !== undefined ? `${student.rmIpr.att}%` : "-"}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge className={`${status.color} text-white`}>
                                {status.label}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center">
                              <span className="text-sm font-medium text-muted-foreground">{proctor}</span>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Showing {filteredStudents.length} of {currentStudents.length} students
                </p>
              </TabsContent>

              <TabsContent value="cards">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredStudents.slice(0, 12).map((student) => {
                    const atts = subjects
                      .map((sub) => (student[sub as keyof typeof student] as { att?: number })?.att)
                      .filter((a) => a !== undefined) as number[];
                    const avgAtt = atts.length > 0 
                      ? Math.round(atts.reduce((a, b) => a + b, 0) / atts.length)
                      : 0;
                    const status = getAttendanceStatus(avgAtt);
                    
                    return (
                      <Card key={student.usn} className="bg-background/50 border-border/50">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <p className="font-semibold text-foreground">{student.name}</p>
                              <p className="text-xs text-muted-foreground font-mono">{student.usn}</p>
                            </div>
                            <Badge className={`${status.color} text-white`}>
                              {avgAtt}%
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">PSC</p>
                              <p className="font-semibold">{student.psc?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.psc?.att ?? "-"}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">DMS</p>
                              <p className="font-semibold">{student.dms?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.dms?.att ?? "-"}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">DBMS</p>
                              <p className="font-semibold">{student.dbms?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.dbms?.att ?? "-"}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">OS</p>
                              <p className="font-semibold">{student.os?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.os?.att ?? "-"}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">WT</p>
                              <p className="font-semibold">{student.wt?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.wt?.att ?? "-"}%</p>
                            </div>
                            <div className="p-2 rounded bg-muted/50">
                              <p className="text-xs text-muted-foreground">RM & IPR</p>
                              <p className="font-semibold">{student.rmIpr?.marks ?? "-"}</p>
                              <p className="text-xs text-muted-foreground">{student.rmIpr?.att ?? "-"}%</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                {filteredStudents.length > 12 && (
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Showing 12 of {filteredStudents.length} students. Use table view for all records.
                  </p>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
