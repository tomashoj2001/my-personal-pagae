import coffyDesktopLight from "@/Assets/projects/coffy-desktop-light.jpg";
import coffyDesktopDark from "@/Assets/projects/coffy-desktop-dark.jpg";
import coffyMobileLight from "@/Assets/projects/coffy-mobile-light.png";
import coffyMobileDark from "@/Assets/projects/coffy-mobile-dark.png";
import countriesDesktopLight from "@/Assets/projects/countries-desktop-light.jpg";
import countriesDesktopDark from "@/Assets/projects/countries-desktop-dark.jpg";
import countriesMobileLight from "@/Assets/projects/countries-mobile-light.png";
import countriesMobileDark from "@/Assets/projects/countries-mobile-dark.png";
import tourismDesktop from "@/Assets/projects/spacetourism-desktop.jpg";
import tourismMobile from "@/Assets/projects/spacetourism-mobile.png";
import deptoDesktopLight from "@/Assets/projects/depto-desktop-light.jpg";
import deptoDesktopDark from "@/Assets/projects/depto-desktop-dark.jpg";
import deptoMobileLight from "@/Assets/projects/depto-mobile-light.png";
import deptoMobileDark from "@/Assets/projects/depto-mobile-dark.png";

export default function useImages(mode, project) {
  const images = [];

  if (mode === "light")
    images.push(
      [deptoDesktopLight, deptoMobileLight],
      [coffyDesktopLight, coffyMobileLight],
      [countriesDesktopLight, countriesMobileLight]
    );
  else
    images.push(
      [deptoDesktopDark, deptoMobileDark],
      [coffyDesktopDark, coffyMobileDark],
      [countriesDesktopDark, countriesMobileDark]
    );
  images.push([tourismDesktop, tourismMobile]);

  return images[project];
}
