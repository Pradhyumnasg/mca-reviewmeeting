import { Mail, Clock } from "lucide-react";

interface FacultyCardProps {
  name: string;
  designation: string;
  teachingExp?: string;
  email?: string;
  image?: string;
  imageScale?: string;
}

const FacultyCard = ({
  name,
  designation,
  teachingExp,
  email,
  image,
  imageScale = "scale-100",
}: FacultyCardProps) => {
  return (
    <div className="card-elevated group overflow-hidden rounded-xl bg-card">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105 ${imageScale}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="font-serif text-4xl font-bold text-primary/30">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {name}
        </h3>
        <p className="text-sm font-medium text-secondary">{designation}</p>
        <div className="mt-3 space-y-2">
          {teachingExp && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary/60" />
              <span>{teachingExp} Experience</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary/60" />
              <span>{email}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
