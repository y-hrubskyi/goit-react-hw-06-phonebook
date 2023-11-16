const LS_KEY = 'contacts';

export const getContactsFromLS = () => {
  return JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
};

export const setContactsToLS = contacts => {
  localStorage.setItem(LS_KEY, JSON.stringify(contacts));
};
