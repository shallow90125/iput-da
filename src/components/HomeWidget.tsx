import { Link } from "@/components/chakra-ui/next-js";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
} from "@/components/chakra-ui/react";

type Props = {
  href: string;
  text: string;
  bgColor: string;
  describe: string;
};

export default function HomeWidget(props: Props) {
  return (
    <GridItem
      display="flex"
      placeContent="streach"
      placeItems="streach"
      bgColor={props.bgColor}
      rounded="lg"
      p="2"
    >
      <Box flex={1}>
        <Text fontSize="2xl" fontWeight="bold">
          {props.text}
        </Text>
        <Text>{props.describe}</Text>
      </Box>
      <Grid flex="none" placeItems="end">
        <Link href={props.href}>
          <Button bgColor="green.50">診断する</Button>
        </Link>
      </Grid>
    </GridItem>
  );
}
