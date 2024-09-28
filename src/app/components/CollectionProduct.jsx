import React from 'react'
import Link from 'next/link'

export default function CollectionProduct({ collectionUrl }) {
    return (
        <>
            <div className="content__blog">
                {collectionUrl.map((collection) => (
                    <div className="blog__item">
                        <div className="blog__inn">
                            <div className="blog__wrap">
                                <div className="element__wrap">
                                    <div className="im_bx">
                                        <img src={collection.img} alt={collection.title}/>
                                    </div>
                                </div>
                                <div className="element__wrap">
                                    <div className="tit_wrap">
                                        <h2 className="text__heading__2">{collection.title}</h2>
                                    </div>
                                </div>
                                <div className="element__wrap">
                                    <div className="des_wrap">
                                        <p>
                                           {collection.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="element__wrap">
                                    <div className="btn_wrap">
                                        <Link href={collection.path} className="button"><span>ดูสินค้าทั้งหมด</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
