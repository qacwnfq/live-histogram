/**
 * Copyright 2017 Fredrik J
 * Released under the MIT license
 */



export const injections = [ 'axEventBus', 'axFeatures' ];
export function create( eventBus, features ) {
   eventBus.subscribe( `didReplace.${this.features.input}`, () => {
      const { output } = features.output;
      eventBus.publish( `didReplace.${output}`, { output, data: analyse( input ) } );
   } );
};

function analyse( input ) {
   // Dummy analysis for testing purpose
   input.forEach( i => { i += 1; } );
   return input;
};
