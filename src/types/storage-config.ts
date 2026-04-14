import type { AuthConfig } from "./auth-config";
import type { ExpedientConfig } from "./expedient-config"

export interface StorageConfig {
    baseUrl: string;
    auth: AuthConfig;
    expedient: ExpedientConfig;
}