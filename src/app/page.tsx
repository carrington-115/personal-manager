import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header className="w-100 flex flex-row justify-between items-center pt-10 px-20">
        <img src="/images/long-logo.png" />
        <div className="flex flex-row gap-10">
          <Button className="text-base" asChild>
            <Link href="/register">Go to Dashboard</Link>
          </Button>
          <Button variant={"secondary"} asChild>
            <Link href="">Login</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
