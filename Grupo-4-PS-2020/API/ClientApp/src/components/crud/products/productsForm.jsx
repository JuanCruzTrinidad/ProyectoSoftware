import React, { useState } from 'react'
import StepWizard from 'react-step-wizard';
import { First } from './First';
import NavWizard from './NavWizard';
import { Second } from './Second';
import styles from './wizard.less';

export const ProductsForm = () => {
    const onChangeStep = (e) =>{console.log(e)};

    const [state, updateState] = useState({
        form: {},
        transitions: {
            // enterRight: `${transitions.animated} ${transitions.enterRight}`,
            // enterLeft: `${transitions.animated} ${transitions.enterLeft}`,
            // exitRight: `${transitions.animated} ${transitions.exitRight}`,
            // exitLeft: `${transitions.animated} ${transitions.exitLeft}`,
            // intro: `${transitions.animated} ${transitions.intro}`,
        },
        // demo: true, // uncomment to see more
    });



    const setInstance = SW => updateState({
        ...state,
        SW,
    });

    const { SW, demo } = state;

    return (
        <div className={'jumbotron'}>
            <div className='row'>
                <div className={`col-12 col-sm-6 offset-sm-3 ${styles['rsw-wrapper']}`}>
                    <StepWizard
                    onStepChange={onChangeStep}
                    nav={<NavWizard/>}
                    instance={setInstance}>

                        <First/>

                        <Second/>

                    </StepWizard>
                </div>
            </div>
        </div>
    )
}
