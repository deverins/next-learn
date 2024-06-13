import React from 'react'

/**
 * 
 * @typedef {object} params
 * @property {string}slugs
 */
/**
 * 
 * @param {{params:params}} params
 * @returns 
 */
const Docs = ({params}) => {
    if (params.slugs?.length === 2) {
        return <h1>Veiwing docs for features {params.slugs [0]} and concept {params.slugs[1]}</h1>
    } else if(params.slugs?.length === 1){
        return <h1>Veiwing docs for feature {params.slugs[0]}</h1>
    }
  return (
    <>
        <div>
            <h1>Docs home page</h1>
        </div>
    </>
  )
}

export default Docs