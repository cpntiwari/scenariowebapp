import { CardTypeOptions } from '@jda/lui-dashboard-scaffolding';
import ScenarioIcon from './ScenarioIcon';

const scenarioCardOptions: CardTypeOptions = {
  minHeight: 8,
  maxHeight: 12,
  minWidth: 6,
  maxWidth: 8,
  initialHeight: 8,
  initialWidth: 6,
  icon: ScenarioIcon,
  displayName: 'Scenario Manager',
  description: 'Card Type displaying large number of data sets in multi select'
};

export const ScenarioCardOptions = scenarioCardOptions;
