// TypeScript definitions for SiHijau API (OpenAPI 3.1.0)

export type UserRole = "USER" | "ADMIN";

export type FreeTimeLevel = "LOW" | "MEDIUM" | "HIGH";

export type DifficultyEnum = "EASY" | "MEDIUM" | "HARD";

export type ActionTypeEnum =
  | "PROCESS_MYSELF"
  | "REUSE"
  | "RECYCLE"
  | "ALLOCATE";

export type WasteCategoryEnum =
  | "ORGANIC"
  | "FOOD_WASTE"
  | "PLASTIC"
  | "PAPER"
  | "GLASS"
  | "METAL"
  | "NOT_WASTE";

export interface UserResponse {
  id: number;
  email: string;
  full_name: string;
  has_yard: boolean;
  free_time_level: FreeTimeLevel;
  avatar_url?: string | null;
  role: UserRole;
  auth_provider: string;
  google_id?: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserCreate {
  email: string;
  full_name: string;
  password: string;
  has_yard?: boolean;
  free_time_level?: FreeTimeLevel;
  avatar_url?: string | null;
}

export interface LoginRequest {
  username: string; // email in OAuth2 password flow
  password: string;
  grant_type?: string;
  scope?: string;
  client_id?: string | null;
  client_secret?: string | null;
}

export interface Token {
  access_token: string;
  token_type: string;
  user?: UserResponse | null;
}

export interface GoogleAuthRequest {
  id_token: string;
}

export interface GoogleAuthUrlResponse {
  authorization_url: string;
}

export interface GoogleDevLoginRequest {
  email?: string;
  full_name?: string;
  picture?: string | null;
  sub?: string;
}

export interface UserPreferencesUpdate {
  has_yard: boolean;
  free_time_level: FreeTimeLevel;
}

export interface ScanResponse {
  id: number;
  image_url: string;
  item_name: string;
  detected_category: string;
  confidence_score: number;
  raw_analysis?: string | null;
  created_at: string;
  estimated_size?: string | null;
  physical_condition?: string | null;
  material_type?: string | null;
  item_specific_actions?: string[];
}

export interface DecisionOption {
  action_type: ActionTypeEnum;
  title: string;
  description: string;
  difficulty: DifficultyEnum;
  estimated_time: string;
  guide_id?: number | null;
  is_primary_recommendation?: boolean;
}

export interface DecisionResponse {
  waste_category: WasteCategoryEnum;
  item_name: string;
  user_context: Record<string, unknown>;
  primary_action: ActionTypeEnum;
  recommendations: DecisionOption[];
  item_specific_action_points?: string[];
  physical_feasibility_notes?: string | null;
}

export interface DecisionEvaluateParams {
  waste_category: WasteCategoryEnum;
  item_name: string;
  has_yard?: boolean | null;
  free_time_level?: FreeTimeLevel | null;
  estimated_size?: string | null;
  scan_id?: number | null;
}

export interface PartnerResponse {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  accepted_categories: string;
  phone_number: string;
  operational_hours: string;
  capacity_info: string;
  requirements?: string | null;
  is_active: boolean;
  created_at: string;
  distance_km?: number | null;
}

export interface PartnerCreate {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  accepted_categories: string;
  phone_number: string;
  operational_hours: string;
  capacity_info: string;
  requirements?: string | null;
  is_active?: boolean;
}

export type PartnerUpdate = Partial<PartnerCreate>;

export interface ListPartnersParams {
  user_lat?: number | null;
  user_lon?: number | null;
  category?: string | null;
  radius_km?: number | null;
  limit?: number;
}

export interface GuideStep {
  step_number: number;
  title: string;
  instruction: string;
}

export interface GuideResponse {
  id: number;
  waste_category: string;
  title: string;
  summary: string;
  difficulty: string;
  estimated_time: string;
  steps: GuideStep[];
  created_at: string;
}

export interface GuideCreate {
  waste_category: WasteCategoryEnum;
  title: string;
  summary: string;
  difficulty: DifficultyEnum;
  estimated_time: string;
  steps: GuideStep[];
}

export interface ActionLogCreate {
  scan_id?: number | null;
  action_type: ActionTypeEnum;
  waste_category: WasteCategoryEnum;
  partner_id?: number | null;
  quantity_desc?: string | null;
  notes?: string | null;
}

export interface ActionLogResponse {
  id: number;
  user_id: number;
  scan_id?: number | null;
  action_type: string;
  waste_category: string;
  partner_id?: number | null;
  quantity_desc?: string | null;
  notes?: string | null;
  created_at: string;
}

export interface ImpactSummaryResponse {
  total_actions: number;
  total_by_action_type: Record<string, number>;
  total_by_category: Record<string, number>;
}

export interface ValidationErrorItem {
  loc: (string | number)[];
  msg: string;
  type: string;
  input?: unknown;
  ctx?: Record<string, unknown>;
}

export interface HTTPValidationError {
  detail: ValidationErrorItem[] | string;
}
