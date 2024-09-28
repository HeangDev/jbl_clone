"use client"
import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import Filter from '@/app/components/Filter';
import ProductRow from '@/app/components/ProductRow';
import { Sales } from '@/app/data/Sales';

export default function Sale() {
    const products = Sales;
    return (
        <>
        <Banner title="เครื่องเล่นแผ่นเสียง" subTitle="คุณภาพเสียงระดับพรีเมี่ยม มาพร้อม ไมโครโฟน ที่ออกแบบมาให้สามารถใช้ได้กับทั้ง iPhone และ Android" classBg="im__013"/>
            <div className="content">
                <div className="sq-app sq-p --grid-view">
                    <Filter/>
                    <ProductRow products={products}/>
                </div>
            </div>
            <SubscriptionSection/>
        </>
    );
}

