import { SearchBar } from "./SearchBar"
import { NotificationButton } from "./NotificationButton"

export const HeaderBar = ({ }) => {
  return (
    <>
      <header className="w-full align-middle flex justify-center gap-2">
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