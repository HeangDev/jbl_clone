import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';
import { Audiohome } from '@/app/data/Audiohome';


export default function AudioHome() {
    return (
        <>
         <Banner title="เครื่องเสียงบ้าน" subTitle="เพลิดเพลินได้ที่บ้าน หรือที่ทำงานของคุณด้วยระบบโฮมเธียเตอร์ใหม่ล่าสุด, ลำโพงซาวด์บาร์, ลำโพงเชื่อมต่อมือถือ และลำโพงคอมพิวเตอร์" classBg="im__009"/>
         <CollectionProduct collectionUrl={Audiohome}/>
            <SubscriptionSection/>
        </>
    );
}

