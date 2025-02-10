import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header className="w-100 flex flex-row justify-between items-center p-10">
        <img src="/images/long-logo.png" />
        <div className="flex flex-row gap-10">
          <Button className="text-base" asChild>
            <Link href="/register">Login</Link>
          </Button>
          <Button variant={"secondary"} asChild>
            <Link href="">Sign up</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
