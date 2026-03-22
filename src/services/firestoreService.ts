import { 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot,
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import { db, OperationType, handleFirestoreError } from '../firebase';
import { Project, Lead, Testimonial, BlogPost } from '../types';

const convertDoc = <T>(doc: QueryDocumentSnapshot<DocumentData>): T => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
    createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt
  } as T;
};

export const getProjects = async (): Promise<Project[]> => {
  const path = 'projects';
  try {
    const q = query(collection(db, path), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(convertDoc<Project>);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
};

export const subscribeToProjects = (callback: (projects: Project[]) => void) => {
  const path = 'projects';
  const q = query(collection(db, path), orderBy('createdAt', 'desc'));
  return onSnapshot(q, (snapshot) => {
    callback(snapshot.docs.map(convertDoc<Project>));
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, path);
  });
};

export const submitLead = async (lead: Omit<Lead, 'id' | 'status' | 'createdAt'>): Promise<string> => {
  const path = 'leads';
  try {
    const docRef = await addDoc(collection(db, path), {
      ...lead,
      status: 'new',
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    return '';
  }
};

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const path = 'testimonials';
  try {
    const q = query(collection(db, path), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(convertDoc<Testimonial>);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const path = 'blog';
  try {
    const q = query(collection(db, path), where('published', '==', true), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(convertDoc<BlogPost>);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
};
