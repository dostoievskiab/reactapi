import React, { useEffect , useState } from 'react';
import { getStoryIds } from '../services/hnApi'
import { Story } from '../components/Story'

export const StoriesContainer = function() {

  const [ storyIds, setStoryIds ] = useState([])

  useEffect( function(){

    getStoryIds().then(function(e){
      setStoryIds(e)
    })

    // getStory('22530029').then(function(e){
    //     console.log(e)
    // })

    console.log('useEffect Rodou!')

  }, []);

  return (storyIds.map(e =>  
    <Story key={e} storyId={e} /> 
  ));

};