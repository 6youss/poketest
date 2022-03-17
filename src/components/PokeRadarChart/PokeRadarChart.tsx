import React from 'react';
import {VictoryChartProps} from 'victory-chart';
import {
  VictoryArea,
  VictoryChart,
  VictoryPolarAxis,
  VictoryTheme,
} from 'victory-native';
import {PokemonStat} from '../PokemonsList/PokemonsList.queries';

interface PokeRadarChartProps extends VictoryChartProps {
  stats: PokemonStat[];
}

export const PokeRadarChart: React.FC<PokeRadarChartProps> = ({
  stats,
  ...props
}) => {
  const data = stats.map(stat => {
    return {
      x: capitalizeFirstLetter(stat.stat.name),
      y: stat.base_stat,
    };
  });

  const max = stats.reduce((prev, current) =>
    prev.base_stat > current.base_stat ? prev : current,
  ).base_stat;

  return (
    <VictoryChart
      polar
      theme={VictoryTheme.material}
      domain={{y: [0, max]}}
      {...props}>
      <VictoryPolarAxis
        tickCount={data.length}
        style={{
          axisLabel: {padding: 10},
          axis: {stroke: 'none'},
          grid: {stroke: 'grey', strokeWidth: 0.25, opacity: 1},
        }}
        labelPlacement="perpendicular"
      />
      <VictoryArea
        style={{data: {fillOpacity: 0.2, fill: 'orange', strokeWidth: 2}}}
        data={data}
      />
    </VictoryChart>
  );
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
