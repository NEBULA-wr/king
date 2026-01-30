
export interface TeamMember {
  name: string;
  number: string;
}

export interface RiskFactor {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  whyIsDanger: string;
  anonymousExample: string;
  correctState: string;
}

export interface ReportContent {
  introduction: string;
  development: string;
  conclusions: string;
}
