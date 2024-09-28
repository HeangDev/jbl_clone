"use client"

import React from "react";
import MainSlide from "./components/MainSlide";
import MainFeature from "./components/MainFeature";
import SubscriptionSection from "./components/Subscription";
import BestSellingProducts from "./components/BestSellingProducts";
import PopularProductCategories from './components/PopularProductCategories'

import { PopularProductCategoriesData } from '@/app/data/PopularProductCategories'
import { BestSellingProductsData } from '@/app/data/BestSellingProducts'



export default function Home() {
    return (
        <>
            <div>
                <MainSlide/>
                <MainFeature/>
                <PopularProductCategories collactions={PopularProductCategoriesData}/>
                <BestSellingProducts products={BestSellingProductsData}/>
                <SubscriptionSection />
            </div>
        </>
    );
}
