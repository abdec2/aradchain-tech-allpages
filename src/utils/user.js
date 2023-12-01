// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { getCurrentUser } from 'aws-amplify/auth';



// We just set refresh token if needed and set our fresh user 
export const checkUser = async (setUser) => {
  try {
    const _user = await getCurrentUser();
    setUser(_user);
    return _user;
  } catch (error) {
    console.error('Failed to get current user credentials', error);
    setUser(null);
    return null;
  }
};

const getRandomString = bytes => {
  const randomValues = new Uint8Array(bytes);
  window.crypto.getRandomValues(randomValues);
  return Array.from(randomValues).map(intToHex).join('');
};

const intToHex = nr => {
  return nr.toString(16).padStart(2, '0');
};