import { BodyContainer } from "./components/BodyContainer"
import { HeaderBar } from "./components/HeaderBar"

export const AttendanceBody = ({ }) => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <HeaderBar />
        <BodyContainer />
      </div>
    </>

  )
}