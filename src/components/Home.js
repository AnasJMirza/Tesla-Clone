import React from 'react';
import Section from './Section';

const Home = () => {
    return (
        <div>
            <Section 
                title = "Model 3"
                description = "Order Online for Touchless Delivery"
                leftButton = "custom order"
                rightButton = "existing inventory"
                image = "model-3.jpg"
            />

            <Section 
                title = "Model Y"
                description = "Order Online for Touchless Delivery"
                leftButton = "custom order"
                rightButton = "existing inventory"
                image = "model-y.jpg"
            />

            <Section 
                title = "Model S"
                description = "Order Online for Touchless Delivery"
                leftButton = "custom order"
                rightButton = "existing inventory"
                image = "model-s.jpg"
            />

            <Section 
                title = "Model X"
                description = "Order Online for Touchless Delivery"
                leftButton = "custom order"
                rightButton = "existing inventory"
                image = "model-x.jpg"
            />

            <Section 
                title = "Solar Panels"
                description = "Lowest Cost Solar Panels in America"
                leftButton = "order now"
                rightButton = "learn more"
                image = "solar-panel.jpg"
            />

            <Section 
                title = "Solar Roof"
                description = "Produce Clean Energy From Your Roof"
                leftButton = "order now"
                rightButton = "learn more"
                image = "solar-roof.jpg"
            />

            <Section 
                title = "Accessories"
                // description = "Produce Clean Energy From Your Roof"
                leftButton = "shop now"
                // rightButton = "learn more"
                image = "accessories.jpg"
            />
        </div>
    );
};

export default Home;