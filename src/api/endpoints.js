import { apiUrl } from "@/constants/api";

// Constantes con los endpoints de la parte backend
export const registerUser = `${apiUrl}/create-user`;
export const loginUser = `${apiUrl}/login`;
export const getUser = `${apiUrl}/get-user`;
export const updateUser = `${apiUrl}/update-user`;
export const logOutUser = `${apiUrl}/logout`;
export const uploadImageUser = `${apiUrl}/upload-image-user`;
export const getAllCurrencies = `${apiUrl}/get-all-currencies`;
export const getSpecCurrency = `${apiUrl}/get-spec-currency`;
