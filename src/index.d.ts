/// <reference types="react" />

import * as React from "react";

export interface TopBarConfig {
  barThickness?: number;
  barColors?: any;
  shadowBlur?: number;
  shadowColor?: string;
}

export default class TopBarProgress extends React.Component<
  React.Props,
  React.State
> {
  static config(config: TopBarConfig): void;
}
