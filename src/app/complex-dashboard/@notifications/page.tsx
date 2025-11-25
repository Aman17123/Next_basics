import  Card  from "@/component/card"
import Link from "next/link"

export default function Notifications() {
  return (
    <Card>
      <div className="">Notifications</div>
      <div>
        <Link className="font-bold" href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  )
}