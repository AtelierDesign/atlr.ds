import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Text } from '../components/Text';

export function TimeCode() {
    const currentTime = moment().format('LTS');

    return (
        <>
            <Text
                size="1"
                css={{
                    color: '$mauveA6',
                    lineHeight: '34px',
                    fontFamily: '$pragmatica',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&:hover': {
                        cursor: 'pointer',
                        color: '$mauveA8',
                    },
                }}
            >
                <Moment format="AY© hh:mm:ss" interval={1000}></Moment>
            </Text>
        </>
    );
}
