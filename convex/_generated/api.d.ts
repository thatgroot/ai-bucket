/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as analytics_getAppAnalytics from "../analytics/getAppAnalytics.js";
import type * as analytics_searchAnalyticsByIndex from "../analytics/searchAnalyticsByIndex.js";
import type * as analytics_updateAnalytics from "../analytics/updateAnalytics.js";
import type * as apps_createApp from "../apps/createApp.js";
import type * as apps_deleteApp from "../apps/deleteApp.js";
import type * as apps_getAppById from "../apps/getAppById.js";
import type * as apps_getApps from "../apps/getApps.js";
import type * as apps_metadata_searchAppMetadataByIndex from "../apps/metadata/searchAppMetadataByIndex.js";
import type * as apps_searchAppsByIndex from "../apps/searchAppsByIndex.js";
import type * as apps_updateApp from "../apps/updateApp.js";
import type * as apps from "../apps.js";
import type * as auth_authenticateUser from "../auth/authenticateUser.js";
import type * as auth_createUser from "../auth/createUser.js";
import type * as categories_createCategory from "../categories/createCategory.js";
import type * as categories_getCategories from "../categories/getCategories.js";
import type * as categories_searchCategoriesByIndex from "../categories/searchCategoriesByIndex.js";
import type * as categories_updateCategory from "../categories/updateCategory.js";
import type * as featured_getFeaturedApps from "../featured/getFeaturedApps.js";
import type * as featured_searchFeaturedAppsByIndex from "../featured/searchFeaturedAppsByIndex.js";
import type * as featured_updateFeaturedApp from "../featured/updateFeaturedApp.js";
import type * as reviews_createReview from "../reviews/createReview.js";
import type * as reviews_getReviews from "../reviews/getReviews.js";
import type * as reviews_searchReviewsByIndex from "../reviews/searchReviewsByIndex.js";
import type * as storage_deleteFile from "../storage/deleteFile.js";
import type * as storage_getFileUrl from "../storage/getFileUrl.js";
import type * as storage_uploadFile from "../storage/uploadFile.js";
import type * as storage from "../storage.js";
import type * as users_createUser from "../users/createUser.js";
import type * as users_getUserByEmail from "../users/getUserByEmail.js";
import type * as users_getUserFavorites from "../users/getUserFavorites.js";
import type * as users_register from "../users/register.js";
import type * as users_searchAdminsByIndex from "../users/searchAdminsByIndex.js";
import type * as users_searchUsersByIndex from "../users/searchUsersByIndex.js";
import type * as users_updateUser from "../users/updateUser.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "analytics/getAppAnalytics": typeof analytics_getAppAnalytics;
  "analytics/searchAnalyticsByIndex": typeof analytics_searchAnalyticsByIndex;
  "analytics/updateAnalytics": typeof analytics_updateAnalytics;
  "apps/createApp": typeof apps_createApp;
  "apps/deleteApp": typeof apps_deleteApp;
  "apps/getAppById": typeof apps_getAppById;
  "apps/getApps": typeof apps_getApps;
  "apps/metadata/searchAppMetadataByIndex": typeof apps_metadata_searchAppMetadataByIndex;
  "apps/searchAppsByIndex": typeof apps_searchAppsByIndex;
  "apps/updateApp": typeof apps_updateApp;
  apps: typeof apps;
  "auth/authenticateUser": typeof auth_authenticateUser;
  "auth/createUser": typeof auth_createUser;
  "categories/createCategory": typeof categories_createCategory;
  "categories/getCategories": typeof categories_getCategories;
  "categories/searchCategoriesByIndex": typeof categories_searchCategoriesByIndex;
  "categories/updateCategory": typeof categories_updateCategory;
  "featured/getFeaturedApps": typeof featured_getFeaturedApps;
  "featured/searchFeaturedAppsByIndex": typeof featured_searchFeaturedAppsByIndex;
  "featured/updateFeaturedApp": typeof featured_updateFeaturedApp;
  "reviews/createReview": typeof reviews_createReview;
  "reviews/getReviews": typeof reviews_getReviews;
  "reviews/searchReviewsByIndex": typeof reviews_searchReviewsByIndex;
  "storage/deleteFile": typeof storage_deleteFile;
  "storage/getFileUrl": typeof storage_getFileUrl;
  "storage/uploadFile": typeof storage_uploadFile;
  storage: typeof storage;
  "users/createUser": typeof users_createUser;
  "users/getUserByEmail": typeof users_getUserByEmail;
  "users/getUserFavorites": typeof users_getUserFavorites;
  "users/register": typeof users_register;
  "users/searchAdminsByIndex": typeof users_searchAdminsByIndex;
  "users/searchUsersByIndex": typeof users_searchUsersByIndex;
  "users/updateUser": typeof users_updateUser;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */
