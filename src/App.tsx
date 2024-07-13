import { FC, useState } from "react";
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { AppsPage, StatsPage } from "./pages";
import { PageType } from "./types";

// TODO: check empty arr apps
export const App: FC = () => {
  const [page, setPage] = useState<PageType>("apps");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            App Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: 140,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 140, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button onClick={() => setPage("apps")}>
              <ListItemText primary="Apps" />
            </ListItem>
            <ListItem button onClick={() => setPage("stats")}>
              <ListItemText primary="Stats" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {page === "apps" ? <AppsPage /> : <StatsPage />}
      </Box>
    </Box>
  );
};
