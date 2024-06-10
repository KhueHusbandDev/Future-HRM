import { BodyContainer } from "./components/BodyContainer"
import { HeaderBar } from "./components/HeaderBar"
import "./TailwindCSSContainer.css";

export const AttendanceBody = ({ }) => {
  return (
    <div className="w-full">
      <HeaderBar />
      <BodyContainer />
    </div>
  )
}