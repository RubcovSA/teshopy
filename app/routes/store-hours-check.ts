import { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  // 1) Hardcode or fetch store hours (from Metafields or DB)
  // For example, open from 9 to 21 (9 AM - 9 PM)
  const now = new Date();
  const currentHour = now.getHours(); // caution: UTC vs local time
  const isOpen = currentHour >= 9 && currentHour < 21;

  // 2) Return JSON
  return json({ open: isOpen });
}
