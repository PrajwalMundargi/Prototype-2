export type EventType = "Minor" | "Flagship"

export interface EventItem {
  name: string
  type: EventType
  teamSize: string // e.g. "1", "2", "1 & 2"
  duration: string
  venue: string
  maxParticipants: number
  prize: number // in INR
}

export interface DepartmentEvents {
  id: string
  name: string
  fullName?: string
  events: EventItem[]
}

export const departments: DepartmentEvents[] = [
  {
    id: "aiml",
    name: "AIML",
    fullName: "AI & ML",
    events: [
      { name: "Reverse image prompting", type: "Minor", teamSize: "1", duration: "2 hr", venue: "Admin block classroom", maxParticipants: 60, prize: 4000 },
      { name: "Turing test", type: "Minor", teamSize: "2", duration: "1 hr", venue: "Admin block classroom", maxParticipants: 100, prize: 4000 },
    ],
  },
  {
    id: "cy",
    name: "CY",
    fullName: "Cybersecurity",
    events: [
      { name: "Escape and exploit", type: "Minor", teamSize: "1", duration: "2-3 hr", venue: "Architecture Block classroom and lab", maxParticipants: 150, prize: 4000 },
      { name: "Zero day arena", type: "Flagship", teamSize: "2", duration: "6 hr", venue: "Architecture Block lab", maxParticipants: 250, prize: 12000 },
    ],
  },
  {
    id: "cse",
    name: "CSE",
    fullName: "Computer Science",
    events: [
      { name: "Code conundrum", type: "Minor", teamSize: "1", duration: "1 hr 30m", venue: "CSE labs", maxParticipants: 150, prize: 4000 },
      { name: "Tech escape quest", type: "Minor", teamSize: "2", duration: "2 hr", venue: "Lab + classroom CSE block", maxParticipants: 200, prize: 4000 },
      { name: "Version control wars", type: "Minor", teamSize: "1", duration: "2 hr", venue: "Edusat hall", maxParticipants: 150, prize: 4000 },
    ],
  },
  {
    id: "csds",
    name: "CSDS",
    fullName: "Data Science",
    events: [
      { name: "Data decoded", type: "Minor", teamSize: "1", duration: "4 hr", venue: "DS block classroom", maxParticipants: 100, prize: 4000 },
      { name: "Kill switch protocol", type: "Minor", teamSize: "1", duration: "4 hr", venue: "Labs DS block", maxParticipants: 100, prize: 4000 },
      { name: "Data Royal", type: "Flagship", teamSize: "2", duration: "6-8 hr", venue: "2 to 3 labs DS block", maxParticipants: 250, prize: 12000 },
    ],
  },
  {
    id: "ece",
    name: "ECE",
    fullName: "Electronics & Communication",
    events: [
      { name: "Innovatrium", type: "Flagship", teamSize: "1", duration: "6 hr", venue: "2nd floor lab ECE block", maxParticipants: 250, prize: 12000 },
      { name: "Embedded escape room", type: "Minor", teamSize: "2", duration: "3 hr", venue: "2nd floor lab ECE block", maxParticipants: 100, prize: 4000 },
      { name: "Bug buster", type: "Minor", teamSize: "2", duration: "2-3 hr", venue: "2nd floor lab ECE block", maxParticipants: 100, prize: 4000 },
    ],
  },
  {
    id: "eee",
    name: "EEE",
    fullName: "Electrical & Electronics",
    events: [
      { name: "Electro quiz (Circuitrix)", type: "Minor", teamSize: "1", duration: "4-5 hr", venue: "EEE classroom and labs", maxParticipants: 200, prize: 4000 },
      { name: "Electra Forge", type: "Flagship", teamSize: "2", duration: "6 hr", venue: "Mech Quadrangle", maxParticipants: 400, prize: 12000 },
    ],
  },
  {
    id: "ise",
    name: "ISE",
    fullName: "Information Science",
    events: [
      { name: "Data to Dashboard: SDG Edition", type: "Minor", teamSize: "2", duration: "3 hr", venue: "CSE block", maxParticipants: 150, prize: 4000 },
    ],
  },
  {
    id: "mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    events: [
      { name: "Ideathon Arena", type: "Minor", teamSize: "2", duration: "8 hr", venue: "MBA seminar hall", maxParticipants: 150, prize: 7000 },
      { name: "IOT nexus", type: "Flagship", teamSize: "1", duration: "6 hr", venue: "Hitech lab ECE", maxParticipants: 300, prize: 10000 },
    ],
  },
  {
    id: "mech",
    name: "MECH",
    fullName: "Mechanical",
    events: [
      { name: "RC car racing", type: "Minor", teamSize: "2", duration: "1 day", venue: "BB court", maxParticipants: 400, prize: 10000 },
      { name: "Robo wars", type: "Flagship", teamSize: "1", duration: "1 day", venue: "Mech quadrangle", maxParticipants: 2500, prize: 40000 },
    ],
  },
  {
    id: "civil",
    name: "CIVIL",
    fullName: "Civil",
    events: [
      { name: "Design, Decode, Dominate", type: "Flagship", teamSize: "2", duration: "1 day", venue: "Civil Block", maxParticipants: 300, prize: 12000 },
      { name: "Bridge It", type: "Minor", teamSize: "1", duration: "2-3 hr", venue: "Mech block 310", maxParticipants: 150, prize: 4000 },
    ],
  },
  {
    id: "mba",
    name: "MBA",
    fullName: "Business Administration",
    events: [
      { name: "BizNova", type: "Flagship", teamSize: "2", duration: "3-4 hr", venue: "Mini auditorium", maxParticipants: 200, prize: 10000 },
    ],
  },
  {
    id: "gaming",
    name: "GAMING",
    fullName: "Gaming",
    events: [
      { name: "Valorant", type: "Flagship", teamSize: "1 & 2", duration: "Two days", venue: "MCA labs CSE block", maxParticipants: 350, prize: 10000 },
      { name: "BGMI", type: "Flagship", teamSize: "2", duration: "5.5 hrs", venue: "CSE block ground floor classroom", maxParticipants: 350, prize: 10000 },
    ],
  },
  {
    id: "grand-hackathon",
    name: "Grand Hackathon",
    fullName: "Grand Hackathon",
    events: [
      { name: "Grand Hackathon", type: "Flagship", teamSize: "1", duration: "24 hr", venue: "Library", maxParticipants: 800, prize: 120000 },
    ],
  },
]

export function getDepartmentById(id: string): DepartmentEvents | undefined {
  return departments.find((d) => d.id === id)
}

export function getDepartmentIds(): string[] {
  return departments.map((d) => d.id)
}
