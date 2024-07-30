import React, { createContext, useContext } from 'react';
import { db } from './firebase'; // Ensure the path is correct
import { collection, getDocs, doc, getDoc } from "firebase/firestore"; 

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    // Function to fetch data from Firestore based on dynamic path
    const fetchFoodArticles = async (category) => {
        try {
            const docRef = doc(db, category);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return docSnap.data().markdown;
            } 
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    // Function to fetch blog articles
    const fetchBlogArticles = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Blog"));
            const articles = [];
            querySnapshot.forEach((doc) => {
                articles.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            return articles;
        } catch (error) {
            console.error("Error fetching blog articles: ", error);
        }
    };

    return (
        <DataContext.Provider value={{ fetchFoodArticles, fetchBlogArticles }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataContextProvider');
    }
    return context;
};
