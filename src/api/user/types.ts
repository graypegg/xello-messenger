interface LanguageResponse {
  translationLanguageId: number
  name: string
  translationLanguage: string
  languageCode: string
  languageName: string
  languageNameLocal: string
  countryName: string
}

export interface LoginResponse {
  userAccountId: number
  defaultLanguageId: number
  userName: string
  isDemo: boolean
  isDemoInstitution: boolean
  agreement: boolean
  lastName2: string
  token: string
  avatarFileName: string
  coverFileName: string
  personalDescription: string
  bitMask: number
  userRoleTitle: string
  gender: string
  sessionId: string
  schoolId: number
  schoolInfo: {
    id: number
    schoolName: string
    schoolCountryType: string
    state: string
    stateFull: string
    defaultLanguage: string
    portTypeId: number
    portType: string
    regionId: number
    regionName: string
    clusterTypeId: number
    clusterType: string
    defaultLanguageId: number
    hasMTP: boolean
    coursePlannerStatus: string
  }
  coursePlannerInfo: {
    id: number
    gradeId: number
    selectionGradeId: number
    schoolId: number
    diplomaId: number
    preRegSchoolId: number
    userId: number
    isAvailable: boolean
    studentStatusId: string
    isLaunched: boolean
    isDemo: boolean
    isExtraCPGrade: boolean
  }
  integrationDistrictId: number
  cc2StudentPortfolioId: number
  schoolEmail: string
  personalEmail: string
  isPersonalEmailPrimary: boolean
  personalEmailVerified: boolean
  contact: {
    address: {
      street: string
      city: string
      stateProv: string
      zip: string
    }
    mobileNumber: string
  }
  languages: LanguageResponse[]
  hasAccessToCollegeSuccess: boolean
  hasAccessToTranscripts: boolean
  hasAccessToInspire: boolean
  hasAccessToHuddles: boolean
  hasAccessToRecommendationLetters: boolean
  dateofBirth: string
  studentId: string
  skillsLabEnabled: boolean
  name: string
  authenticationType: string
  isAuthenticated: boolean
  id: number
  firstName: string
  lastName: string
  gradeId: number
  gradeNumber: number
  grade: string
  avatarUrl: string
  coverUrl: string
  language: LanguageResponse
}