
import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import ProductRow from '@/app/components/ProductRow';
import Filter from '@/app/components/Filter';
import { Gamingseries } from '@/app/data/GamingSeries';


export default function GamingSeries() {
    const products = Gamingseries[0].productlist;
    return (
        <>
        <Banner title="หูฟังและลำโพงเกม" subTitle="เปิดประสบการณ์เสียงคมชัดเต็มรูปแบบในโหมดแอ๊คชั่นเกมส์" classBg="im__008"/>
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

