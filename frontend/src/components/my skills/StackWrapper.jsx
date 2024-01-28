"use client"

import React from 'react'
import Stack from './Stack';
import { findValueByKey } from '@/utils/helper';

const StackWrapper = ({data}) => {
  return (
    <Stack onVote={(item,vote)=>console.log(item.props,vote)}>
              {data.map((obj,index) => (
                <div className="wrapper" style={{
                  transform: `rotate(${index % 2== 0 ?  index * 5: index * -5}deg)`
                }}
                key={obj.id}
                title={obj.Name}
                >
                  <img
                    src={findValueByKey(obj,"Image").url}
                    className="img-fluid"
                    alt={findValueByKey(obj,"Image").alternativeText || obj.Name}
                  />
                </div>
              ))}
            </Stack>
  )
}

export default StackWrapper