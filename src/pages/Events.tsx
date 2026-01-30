import { Palette, Dumbbell, Code, Music, Leaf, BookOpen, Calendar, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import HeroBadge from "@/components/common/HeroBadge";

const clubsData = [
  {
    name: "Pratibimba",
    description: "Pratibimba is a platform that reflects creativity and self-expression through arts, literature, drama, photography, and cultural performances. It celebrates talent, imagination, and individuality among students.",
    icon: Palette,
    events: [
      {
        name: "PixelPerfect Moments",
        date: "25/10/2025",
        description: "A photography and visual arts competition showcasing the creative eye of students through capturing perfect moments and artistic expressions.",
      },
    ],
  },
  {
    name: "Sports (Kridashakthi)",
    description: "The Sports club promotes physical fitness, teamwork, and competitive spirit through indoor and outdoor games. It encourages students to build discipline, leadership, and sportsmanship while enjoying healthy competition.",
    icon: Dumbbell,
    events: [
      {
        name: "KridaX Cup",
        date: "15/11/2025",
        description: "An inter-departmental sports tournament featuring multiple games and athletic competitions to foster team spirit and healthy competition.",
      },
      {
        name: "Warriors Tournament",
        date: "06/02/2025",
        description: "An intense sports tournament celebrating athletic excellence and competitive spirit among students.",
      },
    ],
  },
  {
    name: "Codex",
    description: "Codex is the technical and coding club that fosters innovation, logical thinking, and problem-solving skills. It hosts coding contests, hackathons, workshops, and tech challenges to enhance digital and programming expertise.",
    icon: Code,
    events: [
      {
        name: "Code Carnival",
        date: "06/12/2025",
        description: "A grand coding event featuring hackathons, coding challenges, and tech workshops to showcase programming skills and innovation.",
      },
      {
        name: "Code Carnival",
        date: "21/06/2025",
        description: "Activity report event celebrating coding achievements and technical excellence among club members.",
      },
    ],
  },
  {
    name: "Kalavaibhava",
    description: "Kalavaibhava showcases the richness of traditional and modern art forms, including music, dance, fine arts, and cultural heritage. It provides a stage for students to preserve culture while exploring artistic excellence.",
    icon: Music,
    events: [
      {
        name: "Food Feast",
        date: "20/11/2025",
        description: "A culinary celebration bringing together diverse food cultures and traditions, showcasing the art of cooking and food presentation.",
      },
      {
        name: "Food Feast",
        date: "01/02/2025",
        description: "A grand food festival celebrating cultural diversity through culinary arts and traditional recipes.",
      },
    ],
  },
  {
    name: "Nirvana",
    description: "Nirvana focuses on mental well-being, mindfulness, and inner growth through yoga, meditation, and self-development activities. It aims to help students achieve balance, peace, and clarity in academic and personal life.",
    icon: Leaf,
    events: [],
  },
  {
    name: "Samvid",
    description: "Samvid is dedicated to intellectual growth, ethical values, and awareness through debates, discussions, quizzes, and knowledge-sharing sessions. It encourages critical thinking, communication skills, and social responsibility.",
    icon: BookOpen,
    events: [],
  },
];

interface Event {
  name: string;
  date: string;
  description: string;
}

interface Club {
  name: string;
  description: string;
  icon: React.ElementType;
  events: Event[];
}

const Events = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient relative py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <HeroBadge />
          <h1 className="animate-fade-in font-serif text-4xl font-bold text-white md:text-6xl">
            Clubs & Activities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl animate-slide-up text-lg text-white/80 md:text-xl">
            Explore our vibrant clubs fostering creativity, sports, technology, and personal growth
          </p>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clubsData.map((club, index) => (
              <div
                key={index}
                onClick={() => setSelectedClub(club)}
                className="card-elevated group cursor-pointer rounded-xl bg-card p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <club.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  {club.name}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {club.description}
                </p>
                {club.events.length > 0 && (
                  <div className="mt-4 flex items-center gap-2 text-base text-primary">
                    <Calendar className="h-5 w-5" />
                    <span>{club.events.length} event{club.events.length > 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Events Dialog */}
      <Dialog open={!!selectedClub} onOpenChange={() => setSelectedClub(null)}>
        <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 font-serif text-2xl md:text-3xl">
              {selectedClub && <selectedClub.icon className="h-7 w-7 text-primary" />}
              {selectedClub?.name}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {selectedClub?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <h4 className="mb-4 text-lg font-semibold text-foreground">Events</h4>
            {selectedClub?.events.length === 0 ? (
              <p className="text-base text-muted-foreground">No events recorded yet.</p>
            ) : (
              <div className="space-y-4">
                {selectedClub?.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-border bg-muted/30 p-5"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <h5 className="text-lg font-medium text-foreground">{event.name}</h5>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground">{event.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Events;
