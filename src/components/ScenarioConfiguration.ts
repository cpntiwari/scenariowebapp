export interface ScenarioConfiguration {
  url: string;
  endpointScopes: string[];
}
export const initialConfiguration = {
  url: 'http://localhost:3200/rest/lsr/scenario',
  endpointScopes: []
} as ScenarioConfiguration;
