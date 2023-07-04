import { Button, Text } from "@chakra-ui/react";
import { resourceUsage } from "process";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;

  if (!text) return <></>;

  if (text.length <= limit) return <Text fontSize="xl">{text}</Text>;

  let summary = expand ? text : text.substring(0, 300) + "...";

  return (
    <Text fontSize="xl">
      {summary}
      <Button
        size="sm"
        marginLeft={1}
        fontWeight={"bold"}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
