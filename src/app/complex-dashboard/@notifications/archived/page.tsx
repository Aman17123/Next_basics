import Card from "@/component/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>Archived Notifications</h1>
      <p>This is the archived notifications section.</p>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}