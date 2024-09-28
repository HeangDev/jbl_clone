import React from 'react';
import CollectionProduct from '@/app/components/CollectionProduct';
import SubscriptionSection from '@/app/components/Subscription';
import Banner from '@/app/components/Banner';

import { Headphones } from '@/app/data/Headphones'

const headphones = () => {
    return (
        <>
            <Banner title="หูฟัง" subTitle="ฟังคุณภาพเสียง JBL ที่ออกแบบมาอย่างมีสไตล์ สวมใส่สบาย คุณภาพสูง" classBg="im__004"/>
            <CollectionProduct collectionUrl={Headphones}/>
            <SubscriptionSection/>
        </>
    );
};

export default headphones;
