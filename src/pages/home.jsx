import React from "react";
import BottomNav from "../components/bottom_nav";
import FoodItem from "../components/food_item";
import { Box, Grid } from "@mui/material";
import SearchAppBar from "../components/app_bar";
import { useNavigate } from "react-router";


function Home() {
    const navigate = useNavigate();
    
    const foods = [
        {
            name: "Protein",
            altText: "Protein",
            imageUrl: "https://media.istockphoto.com/id/505592886/photo/selection-of-protein-sources-in-kitchen-background.jpg?s=612x612&w=0&k=20&c=nkQzDMJZWXRMVAfYIICuzG-t6fc9rcrr6oqYeYrZf-o=",
            isLast: false
        },
        {
            name: "Carbohydrates",
            altText: "Carbohydrate",
            imageUrl: "https://media.istockphoto.com/id/1067113342/photo/healthy-products-sources-of-carbohydrates.jpg?s=612x612&w=0&k=20&c=cKizWISABDRCI3D_T2xEpq_z1q0nrJYXscOffdmiV8I=",
            isLast: false
        },
        {
            name: "Fats and Oil",
            altText: "Fats-And-Oil",
            imageUrl: "https://media.istockphoto.com/id/1317729366/photo/various-vegetable-and-nut-oil-in-bottles-on-a-bright-background.jpg?s=612x612&w=0&k=20&c=tf5l5TyY6WUPlq0F9sOG9kPO26iFOVvwWS3uQ-S4FN8=",
            isLast: false
        },
        {
            name: "Micronutrient",
            altText: "MicroNutrient",
            imageUrl: "https://media.istockphoto.com/id/1055177026/photo/foods-high-in-iron-liver-broccoli-persimmon-apples-nuts-legumes-spinach-pomegranate-top-view.jpg?s=612x612&w=0&k=20&c=t1OWyvvWgPoJ5ps5c8VKSKZkZ3ovCV5l4umpoLTFN2U=",
            isLast: false
        },
        {
            name: "Water",
            altText: "Water",
            imageUrl: "https://media.istockphoto.com/id/1356056182/photo/man-pouring-himself-water.jpg?s=612x612&w=0&k=20&c=0vdCiJdbIacGxnGPIma1TL0NlOoEwiBiwuG8NXadXTU=",
            isLast: true
        },
      ];

      const handleItemClick = (altText) => {
        navigate(`/${altText}`);
      };

    return (
        <div>
            <SearchAppBar/>
           <Box sx={{ flexGrow: 1}}>
                <Grid container >
                    {foods.map((food, index) => (
                        <Grid item xs={6} sm={6} md={4} key={index}>
                            <FoodItem
                                name={food.name}
                                altText={food.altText}
                                imageUrl={food.imageUrl}
                                description={food.description}
                                isLast={food.isLast}
                                onClick={() => handleItemClick(food.altText)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <BottomNav />
        </div>
    )
}

export default Home;
