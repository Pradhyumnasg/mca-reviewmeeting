import { Calendar, MapPin, Users } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  attendees?: number;
  status?: "upcoming" | "ongoing" | "completed";
}

const EventCard = ({
  title,
  date,
  location,
  description,
  attendees,
  status = "upcoming",
}: EventCardProps) => {
  const statusStyles = {
    upcoming: "bg-secondary/20 text-secondary-foreground",
    ongoing: "bg-green-100 text-green-800",
    completed: "bg-muted text-muted-foreground",
  };

  const statusLabels = {
    upcoming: "Upcoming",
    ongoing: "Ongoing",
    completed: "Completed",
  };

  return (
    <div className="card-elevated overflow-hidden rounded-xl bg-card">
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
          >
            {statusLabels[status]}
          </span>
        </div>
        <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
        <div className="space-y-2 border-t border-border pt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-secondary" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-secondary" />
            <span>{location}</span>
          </div>
          {attendees && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-secondary" />
              <span>{attendees} Attendees</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
