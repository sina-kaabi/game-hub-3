import {
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { useState } from "react";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const [searchQuery, setSearchQuery] = useState("");
  // const [filteredGenres, setFilteredGenres] = useState("");

  // const handleClick = (genre: Genre) => {
  //   console.log(`Genre with name ${genre.name} clicked`);
  // };

  // const visibleFilters = filteredGenres
  //   ? genres.filter((g) => g.genre === filteredGenres)
  //   : genres;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  if (error) return null;

  if (isLoading) return <Spinner />;

  const filteredGenres = data.filter((genre) =>
    genre.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <InputGroup mb={4}>
        <Input
          type="text"
          placeholder="Search genres"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <List>
        {filteredGenres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
