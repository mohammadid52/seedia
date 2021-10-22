const dynamicRoute = (accountType: string = 'personal', step: string = '') =>
  `/account/${accountType}/edit-profile/${step}`

export const links = {
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  SIGNUP: '/signup',
  PROFILE: '/profile',
  getProfileById: (
    id?: string,
    template?: 1 | 2,
    viewMode: string = 'public'
  ) => `/${id}/${template || 1}/${viewMode || 'public'}`,
  DASHBAORD: '/home',
  SETTINGS: '/settings',
  CHOOSE_ACCOUNT: '/choose-account',
  HOME: '/',
  CHOOSE_TEMPLATE: '/choose-template',
  COMPANY: dynamicRoute('personal', 'company'),
  LOCATION_P: dynamicRoute('personal', 'location'),
  EDUCATION: dynamicRoute('student', 'education'),
  LOCATION_S: dynamicRoute('student', 'location'),
  BUSINESS_STEP_1: dynamicRoute('business', 'stepOne'),
  BUSINESS_STEP_2: dynamicRoute('business', 'stepTwo'),
  // BASE_API_URL: process.env.REACT_APP_BASE_URL,
  BASE_API_URL: 'http://localhost:3005',

  // ~~~~~~~~~~~~All product related stuff here~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

  getProductUrl: (productId: string) => `/product/${productId}`,
  createReview: (productId: string) => `/create-review/${productId}`,
  addProduct: () => `/add-product`,
  cart: `/cart`,
  friendsPurchases: () => `/friends-purchases`,
  BROWSE_PRODUCTS: (id?: string) => `/browse-products/${id}`,
  // Add all product link terms here
  productTerms: ['product', 'review', 'cart', 'purchases'],

  // All project related links should include 'project'
  addProject: () => `/project/add-project`,
  viewProject: (projectId: string) => `/project/p/${projectId}`,
  viewMyProjects: () => `/project/myProjects`,
  exploreJobs: () => `/jobs/explore`,
  searchJobs: (searchQuery: string) => `/jobs?q=${searchQuery}`,
  // Add all project/job link terms here
  projectTerms: ['project', 'jobs'],

  // Work Requests
  placeRequest: () => `/jobs/place-request`,
  viewMyRequests: () => `/jobs/myRequests`,
  viewRequestById: (requestId: string) => `/request/r/${requestId}`,
  searchEmployees: (searchQuery: string) => `/request?q=${searchQuery}`,

  // Groups
  createGroup: () => `/group/create-group`,
  groupById: (groupId: string) => `/group/g/${groupId}`,
}
