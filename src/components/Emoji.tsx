import { Image, ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbUp, alt: "recommand", boxSize: "25px" },
    5: { src: bullEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
