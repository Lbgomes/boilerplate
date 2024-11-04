import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <Box>
        <Typography color="primary.main">Hello World</Typography>
      </Box>
    </div>
  );
}
