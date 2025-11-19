// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../../../public/logo.png";

// function NavBrand() {
//   return (
//     <>
//       <div>
//         <Link href="/">
//           <Image
//             height={2000}
//             width={2000}
//             src={logo}
//             className="h-[49px] w-full"
//             // className="h-10 w-12"
//             alt="logo"
//           />
//         </Link>
//       </div>
//     </>
//   );
// }

// export default NavBrand;
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/Assets/Home/Brand.jpg';

function NavBrand() {
	return (
		<Link
			className="w-[90px]"
			href="/"
		>
			<Image
				src={logo}
				className="h-[61px] w-full"
				alt="logo"
			/>
		</Link>
	);
}

export default NavBrand;
