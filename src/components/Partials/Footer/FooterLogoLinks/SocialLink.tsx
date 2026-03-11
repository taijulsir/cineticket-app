import Link from "next/link"
import { Button } from "@/components/ui/button";


function SocialLink({ link, icon: Icon }) {
  return (
    link ? (
        <Link href={link} passHref>
          <Button variant="social" size="medium">
            <Icon />
          </Button>
        </Link>
      ) : null
  )
}

export default SocialLink