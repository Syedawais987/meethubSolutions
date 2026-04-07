import Image from "next/image";

interface ProfessionalBadgesProps {
  className?: string;
  showHeading?: boolean;
}

const badges = [
  { name: "ICAP", fullName: "Institute of Chartered Accountants of Pakistan", src: "/images/clients/icap.jpg" },
  { name: "ACCA", fullName: "Association of Chartered Certified Accountants", src: "/images/clients/acca.png" },
  { name: "FBR", fullName: "Federal Board of Revenue", src: "/images/clients/fbr.png" },
  { name: "SECP", fullName: "Securities and Exchange Commission of Pakistan", src: "/images/clients/secp.jpg" },
];

export function ProfessionalBadges({
  className = "",
  showHeading = true,
}: ProfessionalBadgesProps) {
  return (
    <div className={className}>
      {showHeading && (
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Registered &amp; Recognized By
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-6">
        {badges.map((badge) => (
          <div
            key={badge.name}
            className="flex h-16 w-24 items-center justify-center rounded-lg border border-border bg-background p-2 transition-colors hover:border-primary/30"
            title={badge.fullName}
          >
            <Image
              src={badge.src}
              alt={badge.fullName}
              width={80}
              height={50}
              className="h-auto max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
