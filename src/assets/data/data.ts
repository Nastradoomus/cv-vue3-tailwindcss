import { main, Main } from "./components/main"
import { contact, Contact } from "./components/contact"
import { education, Education } from "./components/education"
import { references, References } from "./components/references"
import { portfolio, Portfolio } from "./components/portfolio"
import { skillset, Skillset } from "./components/skillset"
import { experience, Experience } from "./components/experience"
import { courses, Courses } from "./components/courses"
import { personal, Personal } from "./components/personal"

export interface Data {
  main: Main
  contact: Contact
  education: Education
  references: References
  portfolio: Portfolio
  skillset: Skillset
  experience: Experience
  courses: Courses
  personal: Personal
}

export const data: Data = {
  main,
  contact,
  education,
  references,
  portfolio,
  skillset,
  experience,
  courses,
  personal
}
