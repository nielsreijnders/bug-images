import Image from "next/image";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Image
      alt="Zuiderhaven Alkmaar"
      quality={100}
      loading="eager"
      width={1600}
      height={800}
      src={'https://admin.zuiderhaven-alkmaar.nl/wp-content/uploads/2023/01/2021_12_23-V10-P1_3613px_Q10-scaled-1.jpg'} 
    />
  )
}
