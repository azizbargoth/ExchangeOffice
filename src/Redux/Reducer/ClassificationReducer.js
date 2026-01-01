

import { ADD_CLASSIFICATION, UPDATE_CLASSIFICATION, REMOVE_CLASSIFICATION } from '../Acitions/ClassificationPayments.js';

// Normalize helper to prevent duplicates by name (trim/lowercase/collapse spaces)
const normalize = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');

// Initial list (optional fallback) – in case localStorage is empty
// If you already have a JSON file: import it here as a fallback
import initialReciptTypes from '../../CountryLists/ReceiptTypes.json';

const loadInitial = () => {
  try {
    const raw = localStorage.getItem('receiptTypes');
    const saved = JSON.parse(raw || '[]');
    return saved.length ? saved : initialReciptTypes; // if you imported JSON
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadInitial(), // [{id, reciptType, code?, description?}, ...]
};

 const classificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASSIFICATION: {
      const item = action.payload;
      const existsById = state.items.some((x) => String(x.id) === String(item.id));
      const existsByName = state.items.some(
        (x) => normalize(x.reciptType) === normalize(item.reciptType)
      );
      if (existsById || existsByName) {
        return state; // ignore duplicates
      }
      return {
        ...state,
        items: [...state.items, item],
      };
    }

    case UPDATE_CLASSIFICATION: {
      const patch = action.payload; // { id, reciptType?, code?, description? }
      const idx = state.items.findIndex((x) => String(x.id) === String(patch.id));
      if (idx < 0) return state;

      // If name is changing, prevent name duplication
      const nextName = patch.reciptType;
      if (nextName) {
        const dup = state.items.some(
          (x, i) =>
            i !== idx &&
            normalize(x.reciptType) === normalize(nextName)
        );
        if (dup) return state; // ignore if would cause duplicate
      }

      const nextItems = state.items.slice();
      nextItems[idx] = { ...nextItems[idx], ...patch };
      return { ...state, items: nextItems };
    }

    case REMOVE_CLASSIFICATION: {
      const id = action.payload;
      const nextItems = state.items.filter((x) => String(x.id) !== String(id));
           return { ...state, items: nextItems };
    }

    default:
      return state;
  }
};
export default classificationReducer
// Remember to persist to localStorage in your store setup or middleware