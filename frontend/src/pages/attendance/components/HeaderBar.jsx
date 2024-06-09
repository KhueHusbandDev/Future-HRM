import { SearchBar } from "./SearchBar"
import "./HeaderBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { NotificationButton } from "./NotificationButton"
// import "./TailwindCSSContainer.css"

export const HeaderBar = ({ }) => {
  return (
    <>
      <header className="w-full align-middle flex justify-center">
        <div className="w-1/2 flex align-middle items-center">
          <div className="block">

            <b className="text-md">Attendance</b>
            <br />
            <span className="text-sm">All Employee Attendance</span>
          </div>
        </div>
        <div className="w-1/2 flex align-middle items-center">
          <SearchBar className="p-5 flex" />
          <NotificationButton />
        </div>
      </header >
    </>
  )
}