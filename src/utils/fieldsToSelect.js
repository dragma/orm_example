const fieldsToSelect = (fields) => fields?.reduce((acc, field) => {
  acc[field] = true;
  return acc;
}, {}) || undefined;

export default fieldsToSelect;
