import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';


import { Homespeakers } from '@/app/data/Homespeakers'

export default function HomeSpeakers() {
    return (
        <>
            <Banner title="ลำโพงสำหรับที่อยู่อาศัย" subTitle="สัมผัสประสบการณ์เสียงเสมือนจริงได้เอง ภายในบ้านของคุณ ด้วยลำโพง JBL" classBg="im__004"/>
            <CollectionProduct collectionUrl={Homespeakers}/>
            <SubscriptionSection/>
        </>
    );
}

