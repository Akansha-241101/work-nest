import type { ProfileForm, WorkspacePrefs } from "@/types/settings";

export const DEFAULT_PROFILE: ProfileForm = {
  name: "Akshu",
  email: "Akshu@worknest.app",
  role: "Little explorer",
};

export const DEFAULT_PREFS: WorkspacePrefs = {
  emailAlerts: true,
  weeklyDigest: true,
  compactCards: false,
};
