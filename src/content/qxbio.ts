/**
 * QXBio Event Sessions Data Structure
 * 
 * Enhanced data model to accommodate comprehensive session information from Google Sheets:
 * 
 * Core Fields:
 * - sessionNumber: Session identifier (e.g., "Opening Session", "Session 1", "Break")
 * - theme: Main theme/topic of the session
 * - time: Full time range (e.g., "8:30 AM - 8:50 AM")
 * - startTime: Session start time
 * - endTime: Session end time
 * - title: Specific title of the talk/presentation/activity
 * - speakers: Array of speaker names
 * - institution: Affiliated institution(s)
 * - duration: Duration in readable format (e.g., "20 min")
 * - type: Session type (opening, talk, panel, keynote, workshop, closing, break)
 * - isKeynote: Boolean flag for keynote sessions
 * 
 * Optional Fields:
 * - session: Full session name for context
 * - description: Additional details about the session
 * - chair: Session chair/moderator
 * - components: Sub-components within a session (for multi-part sessions like Opening)
 * - breakoutGroups: Detailed breakout group information with facilitators
 * 
 * This structure allows for:
 * - Flexible time filtering (by startTime/endTime or full time range)
 * - Session grouping (by sessionNumber or theme)
 * - Speaker and chair tracking
 * - Hierarchical session organization (with components and breakout groups)
 * - Type-safe data access with TypeScript interfaces
 */

// Type definitions for QXBio Sessions
export interface SessionComponent {
  title: string;
  speakers: string[];
}

export interface BreakoutGroup {
  name: string;
  facilitators: string[];
}

export interface QxbioSession {
  sessionNumber: string;
  theme: string;
  time: string;
  startTime: string;
  endTime: string;
  title: string;
  speakers: string[];
  institution: string;
  duration: string;
  type: "opening" | "talk" | "panel" | "keynote" | "workshop" | "closing" | "break";
  isKeynote: boolean;
  session?: string;
  description?: string;
  chair?: string;
  components?: SessionComponent[];
  breakoutGroups?: BreakoutGroup[];
}

export const QXBIO_EVENT = {
  title: "QxBio Annual Event",
  subtitle: "Advancing Computational Biology",
  description:
    "Join us for our annual gathering of leading researchers, innovators, and pioneers in computational biology and quantitative sciences.",
  highlights: [
    {
      title: "Keynote Speakers",
      description:
        "Hear from world-renowned experts pushing the boundaries of computational biology and translational research.",
    },
    {
      title: "Research Presentations",
      description:
        "Discover cutting-edge research and innovative methodologies from our community of scientists and researchers.",
    },
    {
      title: "Networking Sessions",
      description:
        "Connect with peers, mentors, and collaborators in an environment designed to foster meaningful relationships.",
    },
    {
      title: "Workshops & Tutorials",
      description:
        "Participate in hands-on sessions covering the latest tools and techniques in computational biology.",
    },
  ],
};

export const QXBIO_SESSIONS: QxbioSession[] = [
  // Opening Session
  {
    sessionNumber: "Opening Session",
    theme: "Welcome to QxB.io",
    time: "8:30 AM - 8:50 AM",
    startTime: "8:30 AM",
    endTime: "8:50 AM",
    title: "Welcome to QxB.io",
    speakers: ["Dheeraj Pandey", "Swapna Pandey"],
    institution: "",
    duration: "20 min",
    type: "opening",
    isKeynote: false,
    description: "Opening Remarks, QxB.io Documentary, and Context Setting",
    components: [
      {
        title: "Opening Remarks",
        speakers: ["Dheeraj Pandey", "Swapna Pandey"]
      },
      {
        title: "QxB.io (Documentary)",
        speakers: []
      },
      {
        title: "Context Setting",
        speakers: ["Dheeraj Pandey"]
      }
    ]
  },

  // SESSION 1: Quantum in Bio - The Industry Perspective
  {
    sessionNumber: "Session 1",
    theme: "Quantum in Bio - The Industry Perspective",
    time: "8:50 AM - 9:00 AM",
    startTime: "8:50 AM",
    endTime: "9:00 AM",
    title: "Translational Impact",
    speakers: ["Dr. Debanu Das"],
    institution: "",
    duration: "10 min",
    type: "talk",
    isKeynote: false,
    session: "Session 1: Quantum in Bio - The Industry Perspective",
    description: "Insights on last decade and the opportunities ahead"
  },
  {
    sessionNumber: "Session 1",
    theme: "Quantum in Bio - The Industry Perspective",
    time: "9:00 AM - 9:10 AM",
    startTime: "9:00 AM",
    endTime: "9:10 AM",
    title: "Investing into Bio",
    speakers: ["Dr. Scott Hiebert"],
    institution: "",
    duration: "10 min",
    type: "talk",
    isKeynote: false,
    session: "Session 1: Quantum in Bio - The Industry Perspective"
  },
  {
    sessionNumber: "Session 1",
    theme: "Quantum in Bio - The Industry Perspective",
    time: "9:10 AM - 9:20 AM",
    startTime: "9:10 AM",
    endTime: "9:20 AM",
    title: "Quantum Computing - Synergy Across People, Places and Priorities",
    speakers: ["Dr. Scott Aaronson"],
    institution: "",
    duration: "10 min",
    type: "talk",
    isKeynote: false,
    session: "Session 1: Quantum in Bio - The Industry Perspective"
  },
  {
    sessionNumber: "Session 1",
    theme: "Quantum in Bio - The Industry Perspective",
    time: "9:20 AM - 9:45 AM",
    startTime: "9:20 AM",
    endTime: "9:45 AM",
    title: "Panel Discussion & Q&A",
    speakers: [],
    institution: "",
    duration: "25 min",
    type: "panel",
    isKeynote: false,
    session: "Session 1: Quantum in Bio - The Industry Perspective",
    chair: "Dheeraj Pandey"
  },

  // Break
  {
    sessionNumber: "Break",
    theme: "",
    time: "9:45 AM - 10:07 AM",
    startTime: "9:45 AM",
    endTime: "10:07 AM",
    title: "Group Photo & Restroom Break",
    speakers: [],
    institution: "",
    duration: "22 min",
    type: "break",
    isKeynote: false
  },

  // SESSION 2: Quantum in Bio - Scientists/Researchers
  {
    sessionNumber: "Session 2",
    theme: "Quantum in Bio - Scientists/Researchers",
    time: "10:07 AM - 10:14 AM",
    startTime: "10:07 AM",
    endTime: "10:14 AM",
    title: "AI for Biology - Intersection of Academic, Philanthropy and Industry",
    speakers: ["Dr. Emma Lundberg"],
    institution: "",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 2: Quantum in Bio - Scientists/Researchers",
    description: "View from the edge: What's coming/relevant in 3 years"
  },
  {
    sessionNumber: "Session 2",
    theme: "Quantum in Bio - Scientists/Researchers",
    time: "10:14 AM - 10:21 AM",
    startTime: "10:14 AM",
    endTime: "10:21 AM",
    title: "Computational Medicine",
    speakers: ["Dr. Charlie Taylor"],
    institution: "",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 2: Quantum in Bio - Scientists/Researchers"
  },
  {
    sessionNumber: "Session 2",
    theme: "Quantum in Bio - Scientists/Researchers",
    time: "10:21 AM - 10:28 AM",
    startTime: "10:21 AM",
    endTime: "10:28 AM",
    title: "Impact Beyond Research",
    speakers: ["Dr. Mohit K Jolly"],
    institution: "",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 2: Quantum in Bio - Scientists/Researchers"
  },
  {
    sessionNumber: "Session 2",
    theme: "Quantum in Bio - Scientists/Researchers",
    time: "10:28 AM - 10:50 AM",
    startTime: "10:28 AM",
    endTime: "10:50 AM",
    title: "Panel Discussion & Q&A",
    speakers: [],
    institution: "",
    duration: "22 min",
    type: "panel",
    isKeynote: false,
    session: "Session 2: Quantum in Bio - Scientists/Researchers"
  },
  {
    sessionNumber: "Session 2",
    theme: "Quantum in Bio - Scientists/Researchers",
    time: "10:50 AM - 11:05 AM",
    startTime: "10:50 AM",
    endTime: "11:05 AM",
    title: "Keynote Address",
    speakers: ["Dr. Michael Fischbach"],
    institution: "",
    duration: "15 min",
    type: "keynote",
    isKeynote: true,
    session: "Session 2: Quantum in Bio - Scientists/Researchers",
    chair: "Dr. Michael Fischbach"
  },

  // SESSION 3: Reflect on Experiences & Outcomes Since Inception
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:05 AM - 11:12 AM",
    startTime: "11:05 AM",
    endTime: "11:12 AM",
    title: "Aspire Institute",
    speakers: ["Mr. Mark Pearrow"],
    institution: "Aspire Institute",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception",
    description: "Grant, context, positioning and plans"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:12 AM - 11:19 AM",
    startTime: "11:12 AM",
    endTime: "11:19 AM",
    title: "City of Hope",
    speakers: ["Dr. Srividya Swaminathan"],
    institution: "City of Hope",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:19 AM - 11:26 AM",
    startTime: "11:19 AM",
    endTime: "11:26 AM",
    title: "BPAN - Stanford University",
    speakers: ["Dr. Juliet Knowles"],
    institution: "Stanford University",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:26 AM - 11:33 AM",
    startTime: "11:26 AM",
    endTime: "11:33 AM",
    title: "Harker School",
    speakers: ["Mr. Brian Yager"],
    institution: "Harker School",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:33 AM - 11:40 AM",
    startTime: "11:33 AM",
    endTime: "11:40 AM",
    title: "Stanford University",
    speakers: ["Dr. Emma Lundberg"],
    institution: "Stanford University",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:40 AM - 11:47 AM",
    startTime: "11:40 AM",
    endTime: "11:47 AM",
    title: "Indian Institute of Science (IISc)",
    speakers: ["Dr. Mohit Kumar Jolly"],
    institution: "Indian Institute of Science",
    duration: "7 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "11:47 AM - 12:08 PM",
    startTime: "11:47 AM",
    endTime: "12:08 PM",
    title: "UT Austin",
    speakers: ["Dr. Adam Klivans", "Dr. Karen Willcox", "Dr. Thomas Tankeelov"],
    institution: "UT Austin",
    duration: "21 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception",
    description: "7 mins for each presenter"
  },
  {
    sessionNumber: "Session 3",
    theme: "Reflect on Experiences & Outcomes Since Inception",
    time: "12:08 PM - 12:35 PM",
    startTime: "12:08 PM",
    endTime: "12:35 PM",
    title: "Session 3 Wrap-up",
    speakers: ["Amit Kumar", "Adarsh Das"],
    institution: "PHP",
    duration: "27 min",
    type: "talk",
    isKeynote: false,
    session: "Session 3: Reflect on Experiences & Outcomes Since Inception",
    chair: "Amit Kumar & Adarsh Das"
  },

  // Lunch Break
  {
    sessionNumber: "Lunch Break",
    theme: "",
    time: "12:35 PM - 1:35 PM",
    startTime: "12:35 PM",
    endTime: "1:35 PM",
    title: "Lunch Break",
    speakers: [],
    institution: "",
    duration: "60 min",
    type: "break",
    isKeynote: false
  },

  // SESSION 4: Breakout Sessions
  {
    sessionNumber: "Session 4",
    theme: "Breakout Sessions - Key Priorities & Directions",
    time: "1:35 PM - 2:20 PM",
    startTime: "1:35 PM",
    endTime: "2:20 PM",
    title: "Breakout Groups: Key Priorities & Directions (Decade)",
    speakers: [],
    institution: "",
    duration: "45 min",
    type: "workshop",
    isKeynote: false,
    session: "Session 4: Breakout Sessions",
    description: "Group work on key priorities for the decade",
    breakoutGroups: [
      {
        name: "Group 1: Fundamental vs Translational Research",
        facilitators: ["Dr. Charley Taylor", "Mr. Amit Kumar"]
      },
      {
        name: "Group 2: Education & Training (Priorities, Challenges & Opportunities)",
        facilitators: ["Dr. Debanu Das", "Dr. Mohit Jolly", "Dr. Thomas Yankeelov"]
      },
      {
        name: "Group 3: Outreach & Translation (Inter-Disciplinary & Inter-Institutional Collaborations)",
        facilitators: ["Dr. Michael Fischbach"]
      }
    ]
  },
  {
    sessionNumber: "Session 4",
    theme: "Breakout Sessions - Key Priorities & Directions",
    time: "2:20 PM - 3:20 PM",
    startTime: "2:20 PM",
    endTime: "3:20 PM",
    title: "Group Work Presentations",
    speakers: [],
    institution: "",
    duration: "60 min",
    type: "panel",
    isKeynote: false,
    session: "Session 4: Breakout Sessions",
    description: "3 representatives - 1 from each group",
    chair: "Dheeraj & Swapna Pandey"
  },

  // SESSION 5: Concluding Thoughts
  {
    sessionNumber: "Session 5",
    theme: "Concluding Thoughts",
    time: "3:20 PM - 3:40 PM",
    startTime: "3:20 PM",
    endTime: "3:40 PM",
    title: "Key Insights from Large Group",
    speakers: ["Industry, Scientists & Grant Partners Representatives"],
    institution: "",
    duration: "20 min",
    type: "talk",
    isKeynote: false,
    session: "Session 5: Concluding Thoughts",
    description: "5 representatives (total) - Summarizing insights from Industry, Scientists & Grant partners"
  },
  {
    sessionNumber: "Session 5",
    theme: "Concluding Thoughts",
    time: "3:40 PM - 3:55 PM",
    startTime: "3:40 PM",
    endTime: "3:55 PM",
    title: "Concluding Thoughts from PHP Leadership",
    speakers: ["Dheeraj Pandey", "Swapna Pandey", "Amit Kumar"],
    institution: "PHP",
    duration: "15 min",
    type: "talk",
    isKeynote: false,
    session: "Session 5: Concluding Thoughts"
  },
  {
    sessionNumber: "Session 5",
    theme: "Concluding Thoughts",
    time: "3:55 PM - 4:05 PM",
    startTime: "3:55 PM",
    endTime: "4:05 PM",
    title: "Closing Session - Mementos & Vote of Thanks",
    speakers: ["Adarsh Das", "Rakesh Kumar"],
    institution: "PHP",
    duration: "10 min",
    type: "closing",
    isKeynote: false,
    session: "Session 5: Concluding Thoughts"
  },

  // High Tea & Networking
  {
    sessionNumber: "Networking",
    theme: "",
    time: "4:15 PM - 5:00 PM",
    startTime: "4:15 PM",
    endTime: "5:00 PM",
    title: "High Tea & Networking",
    speakers: [],
    institution: "",
    duration: "45 min",
    type: "break",
    isKeynote: false
  },
];

export const QXBIO_REGISTRATION_LINK = "#"; // Update with actual registration link when available

