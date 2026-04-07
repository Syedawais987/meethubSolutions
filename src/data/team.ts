export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  qualifications?: string[];
  linkedin?: string;
}

export const team: TeamMember[] = [
  // Populate with real team data
];
