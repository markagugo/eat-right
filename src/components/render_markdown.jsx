import React, { useEffect, useState } from 'react';
import '../App.css';
import { useData } from '../DataContext';
import { useParams } from 'react-router-dom';
import SearchAppBar from './app_bar';

const MarkdownRenderer = () => {
    const { category } = useParams();
    const { fetchFoodArticles } = useData();
    const [markdownContent, setMarkdownContent] = useState('');
    const foods = ['Protein', 'Carbohydrate', 'Fats-And-Oil', 'MicroNutrient', 'Water'];

    useEffect(() => {
        const fetchMarkdown = async () => {
            if (category) {
                try {
                    if (foods.includes(category)){
                        const markdown = await fetchFoodArticles(`Foods/${category}`);
                        setMarkdownContent(markdown);
                    }else{
                        const markdown = await fetchFoodArticles(`Blog/${category}`);
                        setMarkdownContent(markdown);
                    }
                    
                } catch (error) {
                    console.error('Error fetching Markdown:', error);
                    setMarkdownContent('No content available');
                }
            }
        };

        fetchMarkdown();
    }, [category, fetchFoodArticles]);

    return (
        <div>
            <SearchAppBar/>

            <div className="nutritional-info" dangerouslySetInnerHTML={{ __html: markdownContent || 'Loading...' }} />
            {/* {markdownContent || 'Loading...'} */}
            {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdownContent || 'Loading...'}
            </ReactMarkdown> */}
        {/* </div> */}
        
        </div>
       
    );
};

export default MarkdownRenderer;
