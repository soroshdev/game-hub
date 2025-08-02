import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import PlatformSelectorSkeleton from "./PlatformSelectorSkeleton";

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();
  const skeletons = [1];

  if (error) return null;

  return (
    <>
      {isLoading ? (
        skeletons.map((skeleton) => <PlatformSelectorSkeleton key={skeleton} />)
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id}>{platform.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default PlatformSelector;
