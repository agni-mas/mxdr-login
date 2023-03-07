import React, { FC } from 'react';

interface TopGridBoxProps {
    num: number
    type: string
    isSelected: boolean
}

function TopGridBox(props: TopGridBoxProps) {
    const { num, type, isSelected } = props;

    const styles = {
        main: {
            paddingTop: 13, 
            paddingLeft: 24,
            paddingBottom: 13,
            backgroundColor: isSelected ? '#A100FF' : 'none'
        },
        number: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 32,
            paddingBottom: 6,
        },
        type: {
            fontFamily: 'Graphik',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 14,
        },
    }

    return (
        <div style={styles.main}>
   <div style={styles.number}>{num}</div>
    <div style={styles.type}>{type}</div>
  </div>
    )
}

export default TopGridBox;