import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface AdProduct {
  name: string;
  description: string;
  fee: string;
  target: string;
  features: string[];
}

export interface BenefitItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface FranchiseService {
  title: string;
  description: string;
}