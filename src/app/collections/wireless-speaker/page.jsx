import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';

import { WirelessSpeakers } from '@/app/data/WirelessSpeakers'

const WirelessSpeaker = () => {
    return (
        <>
            <Banner title="ลำโพงไร้สาย" subTitle="สตรีมเพลงของคุณด้วยลำโพงบลูทูธไร้สายได้ทุกๆ ที่ทั้งที่บ้าน และในทุกที่ที่คุณไป" classBg="im__001"/>
            <CollectionProduct collectionUrl={WirelessSpeakers}/>
            <SubscriptionSection/>
        </>
    );
};

export default WirelessSpeaker;
