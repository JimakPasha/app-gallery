import { FC } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { apps } from "../data";
import { flattenDependencies } from "../utils";
import { IApp } from "../types";

export const AppsPage: FC = () => {
  const sortedApps = apps.sort((a, b) => a.appName.localeCompare(b.appName));

  return (
    <Grid container spacing={3}>
      {sortedApps.map(({ appName, image, version, libs }: IApp) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={appName}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={image}
              alt={appName}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {appName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Version: {version}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dependencies:
                <ul>
                  {flattenDependencies(libs).map((dep) => (
                    <li key={dep}>{dep}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
