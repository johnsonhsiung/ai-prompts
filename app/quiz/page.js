import ButtonGrid from "@/components/ButtonGrid";
import { Box, Grid2, Stack, Item, Typography, Divider } from "@mui/material";

export default function Home() {

  return (
      <Box // similar to div
      width="100%"
      height="100%" 
      display="flex"
      justifyContent="center" // align horizontally
      alignItems="center" // align verically
      flexDirection="column" // elements inside are stacked vertically 
      gap={2} // curly bracket just for numbers or javascipt variables or expressions 
      // auto overflow means scrollbar only visible when needed 
      >


        <Box border={"1px solid #333"} width='80%' height='700px' overflow="auto" padding="32px" marginTop="16px">  
            quiz
        </Box>


      </Box>

  
  );
}
