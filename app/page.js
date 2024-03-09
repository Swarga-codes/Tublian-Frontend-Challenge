import Image from "next/image";
import SideNav from "./ui/SideNav";
import Body from "./ui/Body";

export default function Home() {
  return (
   <main className='flex'>
    <SideNav/>
    <Body/>
   </main>
  );
}
