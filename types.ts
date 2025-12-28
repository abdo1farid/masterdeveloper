import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum ToolStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface AssistantResponse {
  markdown: string;
  status: ToolStatus;
}