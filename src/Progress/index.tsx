import React, { type FC, useState } from 'react';
import './index.less';

const Progress: FC<{ percent: number }> = (props: any) => {
    const {percent, style} = props;
    const [bottom, setBottom] = useState('-100%')
    return (
        <div className="circle">
            {/* <span>{percent}%</span> */}
            {
                percent > 0 && percent < 100 ? <div className="wave"></div> : null
            }
        </div>
    )
};

export default Progress;
