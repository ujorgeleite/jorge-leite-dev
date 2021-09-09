
import { Box } from "@chakra-ui/react"
import { ListItem, OrderedList, Link } from "@chakra-ui/react"

export function Header() {
  return (
    <Box
    bg="#6F48C9" 
    color="white" 
    width="20rem"
    height="100vh"
    align="center">
      <Box position="relative" height="100%">
        <OrderedList styleType="none" 
                      align="center"
                      position="absolute"
                      bottom="1"
                      width="100%"
                      m="auto"
                      mb="4rem"
                      boxModel="padding"
                      fontSize="3xl"
                      fontWeight="bold"
                      p="5rem">
          <ListItem>
            <Link href="/About"
                  textDecoration="none">About</Link>
          </ListItem>
          <ListItem>
            <Link href="/Contact">Contact</Link>
          </ListItem>
          <ListItem>
            <Link href="/InProgress">In progress</Link>
          </ListItem>
        </OrderedList>
      </Box>
    </Box>
    )
  }