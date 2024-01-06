import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="max-[--screen-max] mx-auto bg-white">
      <header className="flex items-center justify-between border-b p-4">
        <div className="flex items-center space-x-4">
          <PhoneIcon className="text-gray-600" />
          <span>+1 23456789</span>
          <MailboxIcon className="text-gray-600" />
          <span>clau@domain.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <SearchIcon className="text-gray-600" />
          <HeartIcon className="text-gray-600" />
          <UserIcon className="text-gray-600" />
          <ShoppingCartIcon className="text-gray-600" />
          <Select>
            <SelectTrigger id="currency">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <nav className="flex items-center justify-between bg-gray-100 px-4 py-2">
        <span className="text-lg font-bold">clauē</span>
        <div className="flex space-x-4">
          <Link className="text-gray-700" href="#">
            Demo
          </Link>
          <Link className="text-gray-700" href="#">
            Shop
          </Link>
          <Link className="text-gray-700" href="#">
            Product
          </Link>
          <Badge variant="secondary">Sale</Badge>
          <Link className="text-gray-700" href="#">
            Portfolio
          </Link>
          <Link className="text-gray-700" href="#">
            Lookbook
          </Link>
          <Link className="text-gray-700" href="#">
            Blog
          </Link>
        </div>
        <span className="text-sm text-red-500">
          Summer sale discount off 50%! Shop Now
        </span>
      </nav>
      <main>
        <section className="relative">
          <Image
            alt="Fashion collection"
            width={1550}
            height={600}
            src="/assets/1.png"
            className="aspect-[1550/600] h-[80dvh]  w-full object-top"
          />
          <div className="absolute left-[10rem] top-1/4 text-left">
            <h2 className=" text-2xl">Spring - Summer 2018</h2>
            <h1 className=" text-5xl font-bold">BEST OF COLLECTION!</h1>
            <p className="">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
            </p>
            <Button>Shop Now</Button>
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            <div className="h-2 w-2 rounded-full bg-gray-400" />
            <div className="h-2 w-2 rounded-full bg-gray-400" />
            <div className="h-2 w-2 rounded-full bg-gray-400" />
          </div>
        </section>
        <section className="grid grid-cols-3 gap-4 p-4">
          <Image
            alt="Fashion item 1"
            className="h-[40rem] w-full "
            height={300}
            width={516}
            src="/assets/4.jpg"
          />
          <Image
            alt="Fashion item 2"
            className="h-[40rem] w-full object-cover "
            height="300"
            src="/assets/5.jpg"
            width="516"
          />
          <Image
            alt="Fashion item 3"
            className="h-[40rem] w-full "
            height="300"
            src="/assets/9.webp"
            width="516"
          />
        </section>
      </main>
    </div>
  );
}

function HeartIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function MailboxIcon(props: Props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
