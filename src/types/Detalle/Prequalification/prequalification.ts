import type { Buro } from "./buro";
import type { Prevention } from "./prevention";
import type { Decision } from "./decision";
import type { Client } from "./client";

export interface PrequalificationResponse {
  documentNumber: number;
  status: string;
  buro: Buro | null;
  prevention: Prevention | null;
  decision: Decision | null;
  client: Client;
}