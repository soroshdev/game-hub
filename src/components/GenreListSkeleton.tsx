import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <VStack align="stretch" py="5px">
      <HStack spacing="7px">
        <Skeleton boxSize="32px" borderRadius={8} overflow="hidden" />
        <Skeleton height="18px" width="90px" borderRadius="5px" />
      </HStack>
    </VStack>
  );
};

export default GenreListSkeleton;
