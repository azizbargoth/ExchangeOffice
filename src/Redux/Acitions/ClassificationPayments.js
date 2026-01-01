
export const ADD_CLASSIFICATION = 'addClassification';        
export const UPDATE_CLASSIFICATION = 'UPDATE_CLASIFICATION';
export const REMOVE_CLASSIFICATION = 'REMOVE_CLASIFICATION';

// Helper for ID generation
const genId = () =>
  (typeof crypto !== 'undefined' && crypto.randomUUID)
    ? crypto.randomUUID()
    : Date.now().toString();

// Action creators:

/*
  Add a classification
  @param {{reciptType: string, code?: string, description?: string, id?: string}} payload
 */
export const addClassificationAction = (payload) => {
  // allow passing id, else generate
  const withId = { id: payload.id ?? genId(), ...payload };
  return {
    type: ADD_CLASSIFICATION,
    payload: withId,
  };
};

/*
  *Update a classification
 * @param {{id: string, reciptType?: string, code?: string, description?: string}} payload
 */
export const updateClassificationAction = (payload) => ({
  type: UPDATE_CLASSIFICATION,
  payload, // { id, reciptType?, code?, description? }
});

/*
 * Remove a classification by id
 * @param {string} id
 */
export const removeClassificationAction = (id) => ({
   type: REMOVE_CLASSIFICATION,
  payload: id,
});