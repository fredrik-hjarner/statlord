import React from "react";

import { Grid, Column } from "components";
import StatCard from "../stat-card";

type Props = {
  stats: [string]
};

export default ({ stats }: Props) => {
  return (
    <Grid>
      {stats.map(stat => (
        <>
          <Column width={8}>
            <StatCard statName={stat} />
          </Column>
          <Column width={2} />
        </>
      ))}
    </Grid>
  );
};
