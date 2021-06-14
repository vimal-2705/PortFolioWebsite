import React from 'react';
import { v4 as uuid } from 'uuid';
import { Consumer } from '../Context';
import RecomCard from './RecomCard';

function RecomSection() {
    return (
        <Consumer>
            {value => {
                const { recommendations } = value;
                return (
                    <div class="container-fluid mb-5 mt-3">
                        <div class="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                            {
                                recommendations.map((recommendation) => (
                                    <RecomCard key={uuid()} name={recommendation.name} designation={recommendation.designation} company={recommendation.company} message={recommendation.message} />
                                ))
                            }
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );

}

export default RecomSection;