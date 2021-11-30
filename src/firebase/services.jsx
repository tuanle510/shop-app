import firebase, { db } from './firebase.utils';

export const addDocument = (collection, data) => {
  const query = db.collection(collection);

  query.add({
    ...data,
    createAt: firebase.firestore.FieldValue.serverTimestamp(),
    // lấy thời gian thực
  });
};
