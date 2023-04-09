'use client';

import Image from "../../../public/images/icons/nav-logo.jpg";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/logo.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}

export default Logo;