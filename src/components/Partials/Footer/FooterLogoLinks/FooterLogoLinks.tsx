import FooterContent from "@/Partials/Sections/Footer/FooterContent/FooterContent";
import Icons from "@/Partials/Sections/Footer/Icons/Icons";
import FooterLogoWrapper from "../FooterLogoWrapper/FooterLogoWrapper";
import NavBrand from "@/Partials/Sections/Navbar/NavBrand/NavBrand";
import AntopolisHeart from "../AntopolisHeart/AntopolisHeart";

function FooterLogoLinks() {
  return (
    <>
      <FooterLogoWrapper>
        <NavBrand />
      </FooterLogoWrapper>

      <FooterContent />
      <Icons />
      <AntopolisHeart />
    </>
  );
}

export default FooterLogoLinks;
