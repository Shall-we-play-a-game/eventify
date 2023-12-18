import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex-container flex-col gap-4 p-5 sm:flex-row'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.svg'
            alt='logo'
            width={129}
            height={38}
          />
        </Link>
        <p>&copy; 2023 Eventify. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
