import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { apps } from "../data";
import {
  getTotalApps,
  getDependencyUsage,
  getMostUsedDependency,
  getAppWithMostDependencies,
} from "../utils";

export const StatsPage: FC = () => {
  const totalApps = getTotalApps(apps);
  const dependencyUsage = getDependencyUsage(apps);
  const mostUsedDependency = getMostUsedDependency(dependencyUsage);
  const appWithMostDependencies = getAppWithMostDependencies(apps);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Statistics:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Total number of apps: {totalApps}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Dependency used by most apps: {mostUsedDependency}
      </Typography>
      <Typography variant="body1" gutterBottom>
        App with the most dependencies: {appWithMostDependencies}
      </Typography>
    </Box>
  );
};
